const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router
  .route("/")
  .post(gameController.newGame)
  .get(gameController.checkGameCode)
  .put(gameController.joinGame);

module.exports = router;
