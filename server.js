const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: tru }));
app.use(express.json());

app.get("/api/cpmfog", (req, res) => {
    res.json({ success: true});
});

mongoose.connect {
    process.env.MONGODB_URL || "mongoose://localhost/project-3",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
}