const express = require("express");
const router = express.Router();

// Import mock data
const { user, accounts } = require("../data/mockData");

// HOME API
router.get("/home", (req, res) => {
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  res.status(200).json({
    user: {
      name: user.name,
      lastLogin: user.lastLogin,
    },
    accountsSummary: {
      totalBalance,
      totalAccounts: accounts.length,
    },
    quickLinks: ["Send Money", "Pay Bills", "Cards"],
  });
});

module.exports = router;
