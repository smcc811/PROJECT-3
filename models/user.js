const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
         userId:{
           type:String,
           trim:true,
           required:true,
          },
         password:{
           type:String,
           trim:true,
           required:true,
          },
         lastLoginDate:{
           type:String,
           trim:true,
           required:true,
          },
         firstName:{
           type:String,
           trim:true,
           required:true,
          },
});

const user = mongoose.model("user", user);
module.exports = user;