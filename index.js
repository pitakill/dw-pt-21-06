const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:4444/bedu").catch(console.error);

const app = express();

// Middlewares Configuration
app.use(express.json());
app.use("/", require("./routes/users"));

app.listen(3000);
