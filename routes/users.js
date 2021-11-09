const router = require("express").Router();

const { Create, Read, ReadById, Delete } = require("../controllers/users");

router.get("/", Read);
router.get("/:id", ReadById);
router.post("/", Create);
router.delete("/:id", Delete);

module.exports = router;
