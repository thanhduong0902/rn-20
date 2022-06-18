const errorMdw = (err, req, res, next) => {
  switch (err.message) {
    case "PERMISSION_DENIED":
      res.send("You don't have permission");
      break;
    default:
      next(err);
  }
};

module.exports = errorMdw;
