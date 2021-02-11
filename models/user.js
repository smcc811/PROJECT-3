const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userInfo: [
      {
         userId:{type:String},
         password:{type:String},
         lastLoginDate:{type:String},
         firstNama:{type:String} 
        }     
  ]
});

const user = mongoose.model("user", user);
module.exports = user;