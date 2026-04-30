const express = require("express");
const router = express.Router();

const { loans } = require("../data/mockData");

// /api/loans
router.get("/loans", (req, res) => {
  res.status(200).json({
    loanTypes: loans
  });
});

module.exports = router;