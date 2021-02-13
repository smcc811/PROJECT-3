const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const path = require("path");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/green-work", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("mongoose successfully connected !");
});

connection.on("error", (err) => {
  console.log("mongoose connection error: ", err);
});

const UserControls = require("./controllers/UserControllers.js");
const CarControls = require("./controllers/CarController.js");

app.get("/users", UserControls.all);
app.get("/users/create", UserControls.find);
app.get("/users/:username", UserControls.find);
app.get("/users/:username/plants", UserControls.getAllPlants);

app.get("/plants", PlantControls.all);
app.get("/plants/:username/create", CarControls.create);
