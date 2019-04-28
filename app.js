const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CircularJSON = require('circular-json');
const jaccard = require('jaccard');

const User = require('./models/user.js');
const Topic = require('./models/topic.js');
const Conversation = require('./models/conversation.js');
const Message = require('./models/message.js');

// from resource import resource
// Make sure to change this in client as well
const port = process.env.PORT | 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Mongoose
const mongourl = 'mongodb://127.0.0.1:27017';
const dbName = 'hukumaa';
const userCollectionName = 'users';
const messageCollectionName = 'messages';
const conversationCollectionName = 'conversations';
const topicCollectionName = 'topics';

mongoose.Promise = global.Promise;
mongoose.connect(mongourl + '/' + dbName, { useMongoClient: true });
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Allow CORS
app.all('/*', function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS")
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Info only
app.get('/info', (request, response) => {
    console.log(new Date(), '+++--- /info');
    response.send('Info');
});

// basic landing page
app.get('/', (request, response) => {
    console.log(new Date(), '+++--- /');
    response.send('This is indeed the basic landing page');
});

// create new user
app.post('/newtopic', (request, response) => {
    // console.log(request.body);
    var topic = request.body;
    // assign _id, time, 
    if (!topic._id) {
        topic._id = mongoose.Types.ObjectId().toString();
    }

    if(!topic.title) {
        response.send('Cannot create empty topic');
    }

    db.collection(topicCollectionName).findOne({title: topic.title}, function(err, results) {

        if(err) {
            response.send('Error in creating topic', err);
        }

        if(results == null) {
            var insertTopic = Topic(topic);
            db.collection(topicCollectionName).insert(insertTopic);
            response.status(201).send('Created topic ' + topic.title);

        }
        else {
            response.send('Topic already exists');
        }
    });

});

// Get all topics / topics that match certain string
app.get('/topics', (request, response) => {

    if (!request.query.search) request.query.search = '';
    var query = { 'title': { '$regex': request.query.search } };
    db.collection(topicCollectionName).find(query).sort({created: -1}).toArray(function(err, results) {
        if(results) {
            // if request.query.search
            response.send(CircularJSON.stringify(results));
        }
        else {
            response.send('No results found');
        }
        if (err) console.log('Error retrieving topics', err);
    });
});


app.post('/newuser', (request, response) => {
    var user = request.body;

    if(!user.name) {
        response.send('No username provided!');
    }

    if(user.topics) {
        for(index in user.topics) {
            var topictitle = user.topics[index];
            db.collection(topicCollectionName).findOne({title: topictitle}, function(err, results) {

                if(results == null) {
                    var insertTopic = { _id: mongoose.Types.ObjectId().toString(), title: topictitle};
                    db.collection(topicCollectionName).insert(insertTopic);
                    console.log('Created topic ' + topictitle);
                }
            })
        }
    }
    var insertUser = User(user);
    db.collection(userCollectionName).insert(insertUser);
    response.status(201).send(CircularJSON.stringify(user));
});


app.get('/search', (request, response) => {
    var topiclist = decodeURIComponent(request.query.topics).split(',');
    console.log(topiclist);
    var searchParams = {
        "type": "Senior",
    }
    db.collection(userCollectionName).find(searchParams).sort({created: -1}).toArray(function (err, results) {
        if(err) {
            console.log('Error retrieving wise folks', err);
        }

        var scores = [];
        var matches = [];

        var minScore = 1, minIndex = 0;
        var keyvalues = [];
        results.forEach(result => {
            var jscore = jaccard.index(topiclist, result.topics);
            keyvalues.push( [ result, jscore ] );
        });

        // sort by score
        keyvalues.sort(function compare(kv1, kv2) { return kv2[1] - kv1[1] });
        var matches = [];
        for (var i = 0; i < keyvalues.length; i++) matches.push(keyvalues[i][0]);

        response.send(matches);
    })

});


app.get('/person', (request, response) => {
    if(!request.query.id) {
        response.send('Need to send id !');
    }
    db.collection(userCollectionName).findOne({_id: request.query.id}, function(err, result) {
        if (err) {
            console.log('Cannot fetch resource of id!', err);
            response.send({});
        }

        response.send(result);
    });
});

app.post('/newconversation', (request, response) => {
    var conversation = request.body;
    // required id1 and id2

    if(!conversation.id1 || !conversation.id2) {
        response.send('Need both ids !');
    }

    db.collection(userCollectionName).findOne({ _id: conversation.id1 }, function (err, result) {
        if (err) {
            response.send('Cannot find id1 ! ');
        }
    });

    db.collection(userCollectionName).findOne({ _id: conversation.id2 }, function (err, result) {
        if (err) {
            response.send('Cannot find id2 ! ');
        }
    });

    var insertConversation = Conversation(conversation);
    db.collection(conversationCollectionName).insertOne(insertConversation, function(err, result) {
        if(err) {
            response.send('Error in creating conversation ' + err);
        }
        response.status(201).send(result.ops[0]);
    });
});


app.put('/approveconversation', (request, response) => {
    var status = request.body.status;
    var conversationId = request.body.conversationid;
    
    if(!status) {
        response.send('Send status!');
    }
    var query = {_id: conversationId};
    var update = {'isApproved': status, 'toApprove': false};
    var options = {returnNewDocument: true};

    db.collection(conversationCollectionName).findOneAndUpdate(query, update, options, function(err, result) {
        if(err) {
            response.send('Could not update status');
        }
        if(result) {
            response.send('Updated status ' + CircularJSON.stringify(result) );
        }
    });
});


app.get('/inbox', (request, response) => {
    var id = request.query.id;

    db.collection(userCollectionName).findOne({_id: id}, function(err, result) {
        
        if(err) {
            response.send('Error in searching id', err);
        }
        if(result == null) {
            response.send('No user found');
        }

        // check for all conversations where this id is either in id1 or id2
        var options = {};
        var query = { '$or': [{ 'id1': id }, { 'id2': id }] };
        db.collection(conversationCollectionName).find(query, options).sort({updated: -1}).toArray(function (err, results) {
            if(err) {
                response.send('Cannot fetch conversations', err);
            }
            response.send(results);
        });
    });
});

app.get('/conversation', (request, response) => {
    var cid = request.query.id;

    if(cid) {
        db.collection(conversationCollectionName).findOne({_id: cid}, function(err, result) {
            if(err || result == null) {
                response.send('Cannot fetch conversation' + err);
            }
    
            var query = {conversation: cid};
            var options = {};
            db.collection(messageCollectionName).find(query, options).sort({created: -1}).toArray(function (err, results) {
                if(err) {
                    response.send('Cannot fetch messages' + err);
                }
                if(result == null) {
                    response.send('No conversation found');
                }
                result.messages = results;
                response.send(result);
            });
        });
    }
    else {
        var id1 = request.query.id1;
        var id2 = request.query.id2;
        if(!id1 || !id2) {
            response.send('Need to send conv id or id1 and id2!');
        }
        var query = { '$or': [{ 'id1': id1, 'id2': id2 }, { 'id2': id1, 'id1': id2 }] };
        db.collection(conversationCollectionName).findOne(query, function(err, result) {
            if(err || result == null) {
                response.send('Cannot find conversation ' + err);
            }
            
            var conv_query = {conversation: result._id};
            db.collection(messageCollectionName).find(conv_query).sort({ created: -1 }).toArray(function (err, results) {
                if (err) {
                    response.send('Cannot fetch messages' + err);
                }
                result.messages = results;
                response.send(result);
            });
        });
    }
});

app.post('/newmessage', (request, response) => {
    var cid = request.body.conversation;
    var senderid = request.body.sender;
    var content = request.body.content;

    if(!cid || !senderid || !content) {
        response.send('Need to provide conv id, sender id and content!');
    }
    db.collection(userCollectionName).findOne({_id: senderid}, function(err, result) {
        if(err || result == null) {
            response.send('Could not retrieve user ' +  err);
        }

        db.collection(conversationCollectionName).findOne({_id: cid}, function(err, conv_result) {
            if(err || conv_result == null) {
                response.send('Could not retrieve conversation ' + err);
            }

            if(!conv_result.isApproved && !conv_result.toApprove) {
                response.send('Cannot send message in this conversation');
            }

            // create message
            var message = { _id: mongoose.Types.ObjectId().toString(), 
                            content: content, sender: senderid, conversation: cid};
            var insertMessage = Message(message);
            db.collection(messageCollectionName).insert(insertMessage, function(err, result) {
                if(err) {
                    response.send('Could not make message ' + err);
                }

                var query = { _id: cid };
                conv_result.updated = new Date().toISOString();
                var update = conv_result;
                var options = { returnNewDocument: true, upsert: true };

                db.collection(conversationCollectionName).findOneAndUpdate(query, update, options, function (err, conv_result) {
                    if (err) {
                        response.send('Could not update conversation');
                    }
                    if(conv_result) {
                        response.send(result);
                    }
                });
            });
        });
    });
});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});