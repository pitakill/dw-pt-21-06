const router = require("express").Router();

const { Create, Read, ReadById, Delete } = require("../controllers/users");

router.get("/user", Read);
router.get("/user/:id", ReadById);
router.post("/user", Create);
router.delete("/user/:id", Delete);

module.exports = router;
