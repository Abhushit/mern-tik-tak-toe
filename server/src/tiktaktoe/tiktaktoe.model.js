var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TikTakToeSchema = new Schema(
  {
    player1: {
      name: String,
      wins: Number,
      lose: Number,
      ties: Number,
    },
    player2: {
      name: String,
      wins: Number,
      lose: Number,
      ties: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tiktaktoe", TikTakToeSchema);