const express = require("express");
const fluigRouter = require("./routers/fluigRouter");

const app = express();

app.use(express.json());
app.use(fluigRouter);

module.exports = app;