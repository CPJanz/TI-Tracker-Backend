const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  players: [{ type: String }],
  gameCode: { type: String }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
