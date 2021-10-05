const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URL);

module.exports = {
  // Complete Connection
  db: null,

  // Connection Specific to Collections
  Questions: null,
  Answers:null,
  users: null,
  comments:null,

  async connect() {
    //   Connection to Database
    await client.connect();
    console.log("Connected to Mongo -", process.env.MONGODB_URL);

    // Selecting the Database
    this.db = client.db(process.env.MONGODB_NAME);
    console.log("Selected Database -", process.env.MONGODB_NAME);

    // Initialize Collections
    this.Questions = this.db.collection("Questions");
    console.log("Initialized Collection - Questions");
    this.Answers = this.db.collection("Answers");
    console.log("Initialized Collection - Answers");
    this.users = this.db.collection("users");
    console.log("Initialized Collection - users");
    this.comments = this.db.collection("comments");
    console.log("Initialized Collection - comments");
  },
};
