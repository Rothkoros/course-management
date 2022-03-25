// import express from "express";
const express = require('express')
// import mongoose from "mongoose";
const mongoose = require('mongoose')
// import coursesRoute from "./routes/routes.js";
const coursesRoute = require("./routes/routes.js")
//import to enable writing to another file
const fs = require('fs')

// const express = require('express')
// const mongoose = require('mongoose')

const app = express();

app.use(express.json());

// database connection
mongoose.connect(
  "mongodb+srv://User1:9OXD8Ld7INweOvhS@cluster0.scrg9.mongodb.net/coursedatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection;

//Logs what the API does
mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

//shows that connection has been established
db.once("open", () => {
  console.log("connected to mongodb");
});
//sets us to use /courses/...
app.use("/courses", coursesRoute);

const port = process.env.PORT || 8080
//reports what port we are using
app.listen(port, () => {console.log(`Listening on port ${port}`)});
