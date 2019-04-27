const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CircularJSON = require('circular-json');
const jaccard = require('jaccard');

const User = require('./models/user.js');
const Topic = require('./models/topic.js');

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
        respsonse.send('Cannot create empty topic');
    }
    var insertTopic = Topic(topic);
    db.collection(topicCollectionName).insert(insertTopic);
    response.status(201).send('Created topic ' + topic.title);
});

// Get all topics / topics that match certain string
app.get('/topics', (request, response) => {

    if (!request.query.search) request.query.search = '';
    var query = { 'title': { '$regex': request.query.search } };
    console.log(query);
    db.collection(topicCollectionName).find(query).sort({created: -1}).toArray(function(err, results) {
        console.log('results');
        console.log(results);
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
        return response.send('No username provided!');
    }

    var insertUser = User(user);
    db.collection(userCollectionName).insert(insertUser);
    response.status(201).send(CircularJSON.stringify(user));
});


app.get('/search', (request, response) => {
    var topiclist = decodeURIComponent(request.query.topics).split(',');
    console.log(topiclist);

});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});