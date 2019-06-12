const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const User = mongoose.model("Game", gameSchema);

module.exports = User;
