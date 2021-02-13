const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

let UserController = {
  find: async (req, res) => {
    let found = await UserModel.find({ name: req.params.username });
    res.json(found);
  },

  all: async (req, res) => {
    let allUsers = await UserModel.find();
    res.json(allUsers);
  },

  create: async (req, res) => {
    let newUser = new UserModel(req.body);
    let savedUser = await newUser.save();
    res.json(savedUser);
  },

  getAllPlants: async (req, res) => {
    let foundUser = await UserModel.find({
      name: req.params.username,
    }).populate("plants");
    res.json(foundUser);
  },
};

module.exports = UserController;
