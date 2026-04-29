const express = require("express");
const router = express.Router();

// Import mock data
const { accounts } = require("../data/mockData");

// Helper function
function maskAccountNumber(accountId) {
  return "XXXXXX" + accountId.slice(-4);
}

// ACCOUNTS API
router.get("/", (req, res) => {
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const formattedAccounts = accounts.map(acc => ({
    ...acc,
    accountId: maskAccountNumber(acc.accountId)
  }));

  res.status(200).json({
    totalBalance,
    accounts: formattedAccounts
  });
});

module.exports = router;