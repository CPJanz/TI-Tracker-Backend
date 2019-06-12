const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true }
  // Re enable this when db is ready to be set up.
  // playedGames: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Game"
  //   }
  // ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
