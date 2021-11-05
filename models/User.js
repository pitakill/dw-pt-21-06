const mongoose = require("mongoose");

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

// https://stackoverflow.com/questions/31728988/using-javascript-whats-the-quickest-way-to-recursively-remove-properties-and-va
function removeProperty(obj, p) {
  for (prop in obj) {
    if (prop === p) {
      delete obj[prop];
    } else if (typeof obj[prop] === "object") {
      removeProperty(obj[prop], p);
    }
  }
}

Schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    removeProperty(ret, "_id");
    removeProperty(ret, "password");
  },
});

module.exports = mongoose.model("User", Schema);
