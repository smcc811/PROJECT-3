const express = require("express");
const router = express.Router();
const Plant = require("../models/plants");

router.get("/", (req, res) => {
  Plant.find()
    .then((plants) => {
      res.json(plants);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

//localhost:3000/id="1"?/growzone="fod"
router.get("/:id?", (req, res) => {
  Plant.findById(req.params.id)
    .then((foundPlant) => {
      res.json(foundPlant);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

//  GET /plant/:type?/:userid
// gets every plant of a specific type that belongs to one user
router.get("/:userid", (req, res) => {
  Plant.find({
    type: req.params.type,
    user: req.params.userid,
  })
    .then((foundPlant) => {
      res.json(foundPlant);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Plant.create(req.body).then((newPlant) => {
    console.log(newPlant);
    res.json(newPlant);
  });
});

router.delete("/:id", (req, res) => {
  Plant.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
