const { db } = require("./");

const findUserByUsername = async (username) => {
  return await db.users.findOne({ username: username });
};

const insertUser = async (username, password, isAdmin) => {
  return await db.users.insertOne({
    username: username,
    password: password,
    isAdmin: isAdmin,
  });
};

module.exports = { findUserByUsername, insertUser };
