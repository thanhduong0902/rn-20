const express = require("express");
const authCtrl = require("../constroller/AuthController");

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await authCtrl.signIn(username, password);
  res.json(user);
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await authCtrl.signUp(username, password);
  res.json({
    message: "SIgn up success",
  });
});

module.exports = router;
