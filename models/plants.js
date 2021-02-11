const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plantSchema = new Schema({
  plantInfo: [
      {
          userId:{type:String},
          growZone:{type: String },
          soilType:{type: String},
          growingHeight:{type:String},
          growingWidth:{type:String},
          spacing:{type:String},
          sunTolerance:{type:String},
          pantDepth:{type:String},
          moistureTolerance:{type:String},
          generalType:{type:String},
          scientificName:{type:String}  
        }     
  ]
});

const plant = mongoose.model("plant", plantSchema);
module.exports = plant;