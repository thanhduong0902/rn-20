const { db } = require("./");

const getStudent = async () => {
  return await db.students.find({}).toArray();
};

const insertStudent = async (name, age, grade) => {
  return await db.students.insertOne({
    name: name,
    age: age,
    grade: grade,
  });
};

module.exports = { getStudent, insertStudent };
