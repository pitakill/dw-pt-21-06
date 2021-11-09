const router = require("express").Router();

router.get("/", (_, res) => {
  res.send('<h1>Welcome to my API :-)</h1><a href="/user">/user</a>');
});

router.use("/user", require("./users"));

module.exports = router;
