const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signIn = async (username, password) => {
  //validation
  //get user by user
  const user = await userModel.findUserByUsername(username);
  if (!user) {
    throw new Error("User not existed");
  }
  // check password
  await checkPassword(user, password);
  return {
    user: user,
    token: generateJwt(username),
  };
};

const signUp = async (username, password) => {
  //validation
  //check userrname existed
  const user = await userModel.findUserByUsername(username);
  if (user) {
    throw new Error("username exist");
  }
  const hashedPassword = await hashPassword(password);
  //Create user
  return await userModel.insertUser(username, hashedPassword, false);
};

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const checkPassword = async (user, password) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("wr password");
  }
};

const generateJwt = (username) => {
  const token = jwt.sign({ username: usernmae }, "JWT_SECRET", {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { signIn, signUp };
