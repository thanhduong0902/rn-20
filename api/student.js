const router = require("express").Router();
const studentCtrl = require("../constroller/StudentControll");
const jwtMdw = require("../middleware/jwt");
router
  .get("/", jwtMdw, async (req, res) => {
    const students = await studentCtrl.getAllStudent(req.user);
    res.json(students);
  })
  .get("/:id", (req, res) => {})
  .post("/", async (req, res) => {
    const { name, age, grade } = req.body;
    await studentCtrl.createStudent(name, age, grade);
    res.json({ message: "Creat" });
  })
  .put("/:id", (req, res) => {})
  .delete("/:id", (req, res) => {});

module.exports = router;
