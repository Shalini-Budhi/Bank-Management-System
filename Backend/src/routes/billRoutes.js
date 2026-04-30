const express = require("express");
const router = express.Router();

const { bills } = require("../data/mockData");

// /api/bills
router.get("/bills", (req, res) => {
  res.status(200).json({
    savedBills: bills,
    rechargeOptions: ["Mobile", "DTH", "FASTag"]
  });
});

module.exports = router;