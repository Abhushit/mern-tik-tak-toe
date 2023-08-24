import mongoose, { Schema } from "mongoose";

const TikTakToeSchema = new Schema(
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

export default mongoose.model("tiktaktoe", TikTakToeSchema);
