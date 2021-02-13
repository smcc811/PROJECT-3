const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: true,
    Plant: [
      {
        type: Schema.Types.ObjectId,
        ref: "Plant",
      },
    ],
  },

  password: {
    type: String,
    trim: true,
    required: true,
  },
  lastLoginDate: {
    type: String,
    trim: true,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
});

const user = mongoose.model("User", user);
module.exports = mongoose.model("User", UserSchema);
