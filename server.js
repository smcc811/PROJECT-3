const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const path = require("path");

mongoose.connect( "mongodb://127.0.0.1/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const plantController = require("./controllers/plantController");
const userController = require("./controllers/userController");
app.use("/api/plant", plantController);
app.use("/api/user", userController);

// const connection = mongoose.connection;
// connection.on("connected", () => {
//   console.log("mongoose successfully connected !");
// });

// connection.on("error", (err) => {
//   console.log("mongoose connection error: ", err);
// });
app.use(express.static("client/build"));
app.get("/api/config", (req, res) => {
  res.json({ success: true });
});


// if a user tries to go to a route that does not exist, take them back to index.html (root of react)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
