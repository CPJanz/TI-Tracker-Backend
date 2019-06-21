const router = require("express").Router();

const userRoutes = require("./user");
const gameRoutes = require("./game");

router.use("/user", userRoutes);
router.use("/game", gameRoutes);

router.use("/", (req, res) => res.send("API routes"));

module.exports = router;
