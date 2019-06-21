const db = require("../models");
function createGameCode() {
  const codeLength = 4;
  const possibleValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let gameCode = "";
  for (let i = 0; i < codeLength; i++) {
    gameCode += possibleValues.charAt(Math.random() * possibleValues.length);
  }
  return gameCode;
}
module.exports = {
  //Creates a new game, putting the creating player in the list of players and returns the game.
  newGame: (req, res) => {
    db.Game.create({ players: [req.body.name], gameCode: createGameCode() })
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },

  checkGameCode: (req, res) => {
    db.Game.find({ gameCode: req.body.gameCode })
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },

  joinGame: (req, res) => {
    db.Game.findOneAndUpdate(
      { gameCode: req.body.gameCode },
      { $push: { players: req.body.name } },
      { new: true }
    )
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  }
};
