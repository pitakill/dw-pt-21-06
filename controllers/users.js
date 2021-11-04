const User = require("../models/User");

async function Create(req, res) {
  try {
    // Sequelize
    // const {
    //   dataValues: { id },
    // } = await User.create(req.body);

    // mongoose
    const user = new User(req.body);
    const { _id: id } = await user.save();

    res.status(201).send({
      msg: `User created with id: ${id}`,
    });
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function Read(_, res) {
  try {
    const users = await User.obtain();

    res.json(users);
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function ReadById(req, res) {
  try {
    const user = await User.obtainById(req.params.id);

    res.json(user);
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function Delete(req, res) {
  try {
    const id = await User.remove(req.params.id);

    res.json({ msg: `User with id (${id}) deleted` });
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function ReadLikesByUserId(req, res) {
  try {
    const { id } = req.params;
    const likes = await User.obtainLikesByUserId(id);

    res.json({ user: { id }, likes });
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

module.exports = {
  Create,
  Read,
  ReadById,
  Delete,
  ReadLikesByUserId,
};
