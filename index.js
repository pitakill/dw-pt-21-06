const express = require("express");

const app = express();

// Middlewares Configuration
app.use(express.json());
app.use("/", require("./routes/users"));

app.listen(3000);
