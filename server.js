const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true }));
app.use(express.json());
const path = require("path");




mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/green-work",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
    
);

const connection = mongoose.connection;
connection.on("connected", () =>{
    console.log("mongoose successfully connected !" );
});

connection.on("error", (err) => {
    console.log("mongoose connection error: ", err);
});
app.use(express.static("client/build"));
app.get("/api/config", (req, res) => {
    res.json({ success: true});
});

app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, ()=> {
    console.log (`Server is running on http://localhost:${PORT}`);
});



