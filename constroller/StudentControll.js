const studentModel = require("../models/student");

const getAllStudent = async (user) => {
  checkPromission(user);
  return await studentModel.getStudent();
};

const createStudent = async (name, age, grade) => {
  return await studentModel.insertStudent(name, age, grade);
};

const checkPromission = (user) => {
  if (!user.isAdmin) {
    throw new Error("PERMISSION_DENIED");
  }
  return true;
};

module.exports = { getAllStudent, createStudent };
