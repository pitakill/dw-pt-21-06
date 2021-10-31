const router = require("express").Router();

const { Create, Read, Delete } = require("../controllers/users");

router.get("/user", Read);
router.post("/user", Create);
router.delete("/user/:id", Delete);

module.exports = router;
