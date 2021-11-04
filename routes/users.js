const router = require("express").Router();

const {
  Create,
  Read,
  ReadById,
  Delete,
  ReadLikesByUserId,
} = require("../controllers/users");

router.get("/user", Read);
router.get("/user/:id", ReadById);
router.get("/user/:id/likes", ReadLikesByUserId);
router.post("/user", Create);
router.delete("/user/:id", Delete);

module.exports = router;
