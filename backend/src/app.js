const express = require("express");
const fluigRouter = require("./routes/fluigRouter");

const app = express();

app.use(express.json());
app.use(fluigRouter);

module.exports = app;