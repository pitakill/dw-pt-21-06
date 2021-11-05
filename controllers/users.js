const User = require("../models/User");

async function Create(req, res) {
  try {
    const user = new User(req.body);
    const response = await user.save();

    res.status(201).send(response);
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function Read(_, res) {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function ReadById(req, res) {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function Delete(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

module.exports = {
  Create,
  Read,
  ReadById,
  Delete,
};
