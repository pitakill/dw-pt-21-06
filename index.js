const express = require("express");
const app = express();

const users = [
  {
    email: "juan.perez@hotmail.com",
  },
  {
    email: "maria.perez@hotmail.com",
  },
];

app.use(express.json());

app.post("/users", function (req, res) {
  const info = req.body;
  users.push(info);

  res.status(201).send({ message: `User ${info.email} created` });
});

app.get("/users", function (req, res) {
  res.send(users);
});

app.delete("/users/:id", function (req, res) {
  const { id } = req.params;

  // id + 1 sea al menos la cantidad de users
  if (id < users.length) {
    const { email } = users[id];
    users.splice(id, 1);
    res.send({ message: `User with email ${email} erased` });
    return;
  }

  res.send({ message: `There is no user with id: ${id}` });
});

app.listen(3000);
