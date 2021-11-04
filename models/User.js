// sequelize
// const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("mysql://root:secret@localhost:3333/bedu");
//
// class User extends Model {}
// User.init(
//   {
//     name: DataTypes.STRING,
//     birthday: DataTypes.DATE,
//     email: DataTypes.STRING,
//     city: DataTypes.STRING,
//   },
//   { sequelize, modelName: "prueba" }
// );
// (async function () {
//   await sequelize.sync();
// })();
// module.exports = User;

// mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:4444/bedu");

const Schema = new mongoose.Schema(
  {
    name: String,
    birthday: Date,
    email: {
      type: String,
      unique: true,
      required: [true, "can't be empty"],
    },
    city: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", Schema);
