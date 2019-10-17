var express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");

var logger = require("morgan");

var app = express();

const db = config.get("MONGO_URI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log("MongoDB Error:" + err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.json());
app.use(cors());

app.use("/api/jobs", require("./routes/api/job"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

module.exports = app;
