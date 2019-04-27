const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const CircularJSON = require("circular-json");
const jaccard = require("jaccard");

const User = require("./models/user.js");
const Topic = require("./models/topic.js");
const Conversation = require("./models/conversation.js");

// from resource import resource
// Make sure to change this in client as well
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Mongoose
const mongourl = "mongodb://127.0.0.1:27017";
const dbName = "hukumaa";
const userCollectionName = "users";
const messageCollectionName = "messages";
const conversationCollectionName = "conversations";
const topicCollectionName = "topics";

mongoose.Promise = global.Promise;
mongoose.connect(
  mongourl + "/" + dbName,
  { useMongoClient: true }
);
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Allow CORS
app.all("/*", function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.header("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Info only
app.get("/info", (request, response) => {
  console.log(new Date(), "+++--- /info");
  response.send("Info");
});

// basic landing page
app.get("/", (request, response) => {
  console.log(new Date(), "+++--- /");
  response.send("This is indeed the basic landing page");
});

// create new user
app.post("/newtopic", (request, response) => {
  // console.log(request.body);
  var topic = request.body;
  // assign _id, time,
  if (!topic._id) {
    topic._id = mongoose.Types.ObjectId().toString();
  }
  if (!topic.title) {
    response.send("Cannot create empty topic");
  }
  var insertTopic = Topic(topic);
  db.collection(topicCollectionName).insert(insertTopic);
  response.status(201).send("Created topic " + topic.title);
});

// Get all topics / topics that match certain string
app.get("/topics", (request, response) => {
  if (!request.query.search) request.query.search = "";
  var query = { title: { $regex: request.query.search } };
  console.log(query);
  db.collection(topicCollectionName)
    .find(query)
    .sort({ created: -1 })
    .toArray(function(err, results) {
      if (results) {
        // if request.query.search
        response.send(CircularJSON.stringify(results));
      } else {
        response.send("No results found");
      }
      if (err) console.log("Error retrieving topics", err);
    });
});

app.post("/newuser", (request, response) => {
  var user = request.body;

  if (!user.name) {
    response.send("No username provided!");
  }

  var insertUser = User(user);
  db.collection(userCollectionName).insert(insertUser);
  response.status(201).send(CircularJSON.stringify(user));
});

app.get("/search", (request, response) => {
  var topiclist = decodeURIComponent(request.query.topics).split(",");
  console.log(topiclist);
  var searchParams = {
    type: "Senior"
  };
  db.collection(userCollectionName)
    .find(searchParams)
    .toArray(function(err, results) {
      if (err) {
        console.log("Error retrieving wise folks", err);
      }

      var scores = [];
      var matches = [];

      var minScore = 1,
        minIndex = 0;
      var keyvalues = [];
      results.forEach(result => {
        var jscore = jaccard.index(topiclist, result.topics);
        keyvalues.push([result, jscore]);
      });

      // sort by score
      keyvalues.sort(function compare(kv1, kv2) {
        return kv2[1] - kv1[1];
      });
      var matches = [];
      for (var i = 0; i < keyvalues.length; i++) matches.push(keyvalues[i][0]);

      response.send(matches);
    });
});

app.get("/person", (request, response) => {
  if (!request.query.id) {
    response.send("Need to send id !");
  }
  db.collection(userCollectionName).findOne({ _id: request.query.id }, function(
    err,
    result
  ) {
    if (err) {
      console.log("Cannot fetch resource of id!", err);
      response.send({});
    }

    response.send(result);
  });
});

app.get("/newconversation", (request, response) => {
  var conversation = request.body;
  // required id1 and id2

  if (!conversation.id1 || !conversation.id2) {
    response.send("Need both ids !");
  }

  var insertConversation = Conversation(conversation);
  db.collection(conversationCollectionName).insert(insertConversation);
  response.status(201).send(CircularJSON.stringify(conversation));
});

app.put("/approveconversation", (request, response) => {
  var status = request.body.status;
  var conversationId = request.body.conversationid;

  if (!status) {
    response.send("Send status!");
  }
  var query = { _id: conver };
  var update = { isApproved: status };
  var options = { returnNewDocument: true };

  db.collection(conversationCollectionName).findOneAndUpdate(
    query,
    update,
    options,
    function(err, result) {
      if (err) {
        response.send("Could not update status");
      }
      if (result) {
        response.send("Updated status " + CircularJSON.stringify(result));
      }
    }
  );
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
