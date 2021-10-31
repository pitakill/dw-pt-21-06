const User = require("../models/User");

async function Create(req, res) {
  try {
    const user = new User(req.body);
    const result = await user.save();
    msg: `User created with id: ${result.insertId}`;
    res.status(201).send({
      msg: `User created with id: ${result.insertId}`,
    });
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function Read(_, res) {
  try {
    const users = await User.get();

    res.json(users);
  } catch (error) {
    res.status(503).json({ msg: error });
  }
}

async function Delete(req, res) {
  try {
    const user = await User.delete(req.params.id);

    res.json({ msg: `User with id (${user.id}) deleted` });
  } catch (error) {
    console.log(error);
    res.status(503).json({ msg: error });
  }
}

module.exports = {
  Create,
  Read,
  Delete,
};
