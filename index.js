require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI).catch(console.error);

const app = express();

// Middlewares Configuration
app.use(cors());
app.use(express.json());
app.use("/", require("./routes"));

app.listen(process.env.PORT);
