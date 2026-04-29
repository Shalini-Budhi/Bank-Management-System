const express = require("express");
const router = express.Router();

const { insurance } = require("../data/mockData");

// /api/insurance
router.get("/insurance", (req, res) => {
  res.status(200).json({
    insuranceProducts: insurance
  });
});

module.exports = router;