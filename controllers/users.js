const User = require("../models/User");

async function Create(req, res) {
  try {
    const user = new User(req.body);
    const id = await user.save();

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

async function Delete(req, res) {
  try {
    const id = await User.remove(req.params.id);

    res.json({ msg: `User with id (${id}) deleted` });
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

module.exports = {
  Create,
  Read,
  Delete,
};
