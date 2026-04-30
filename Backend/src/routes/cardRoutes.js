const express = require("express");
const router = express.Router();

const { cards } = require("../data/mockData");

// /api/cards
router.get("/cards", (req, res) => {
  res.status(200).json({
    cardFeatures: cards
  });
});

module.exports = router;