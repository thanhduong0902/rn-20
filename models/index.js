const { MongoClient } = require("mongodb");

const db = {};

const connectDb = async () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  console.log("DB connected");
  const database = client.db("react-native");
  db.students = database.collection("students");
  db.classes = database.collection("classes");
  db.teachers = database.collection("teachers");
  db.users = database.collection("users");
};
module.exports = { db, connectDb };
