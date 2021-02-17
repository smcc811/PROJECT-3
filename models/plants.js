const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plantSchema = new Schema({
  password: {
    type: String,
    trim: true,

  },
  name: {
    type: String,
    trim: true,
  },
  growZone: {
    type: String,
    trim: true,

  },
  plantType: {
    type: String,
    
  },
  soilType: {
    type: String,
    trim: true,
   
  },
  growingHeight: {
    type: String,
    trim: true,
    
  },
  growingWidth: {
    type: String,
    trim: true,

  },
  spacing: {
    type: String,
    trim: true,

  },
  sunTolerance: {
    type: String,
    trim: true,
    
  },
  plantDepth: {
    type: String,
    trim: true,
   
  },
  moistureTolerance: {
    type: String,
    trim: true,
    
  },
  generalType: {
    type: String,
    trim: true,
    
  },
  scientificName: {
    type: String,
    trim: true,
    
  },
});

const Plant = mongoose.model("plant", plantSchema);
module.exports = Plant;
