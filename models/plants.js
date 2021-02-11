const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plantSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: true,
  },
  growZone: {
    type: String,
    trim: true,
    required: true,
  },
  soilType: {
    type: String,
    trim: true,
    required: true,
  },

  growingHeight: {
    type: String,
    trim: true,
    required: true,
  },
  growingWidth: {
    type: String,
    trim: true,
    required: true,
  },
  spacing: {
    type: String,
    trim: true,
    required: true,
  },
  sunTolerance: {
    type: String,
    trim: true,
    required: true,
  },
  plantDepth: {
    type: String,
    trim: true,
    required: true,
  },
  moistureTolerance: {
    type: String,
    trim: true,
    required: true,
  },
  generalType: {
    type: String,
    trim: true,
    required: true,
  },
  scientificName: {
    type: String,
    trim: true,
    required: true,
  },
});

const plant = mongoose.model("plant", plantSchema);
module.exports = Plant;
