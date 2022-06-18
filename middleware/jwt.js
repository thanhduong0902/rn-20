const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const jwtMdw = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.veridy(token, "JWT_SECRET");
    const user = userModel.findUserByUsername(decoded.username);
    req.user = user;
    next();
  } catch (err) {}
};

module.exports = jwtMdw;
