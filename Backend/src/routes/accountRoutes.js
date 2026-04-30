const { accounts } = require("../data/mockData");

// Import mock data

// Helper function
function maskAccountNumber(accountId) {
  return "XXXXXX" + accountId.slice(-4);
}

// ACCOUNTS API
exports.accountsRouter = async (req, res) => {
  const totalBalance = await accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const formattedAccounts = accounts.map((acc) => ({
    ...acc,
    accountId: maskAccountNumber(acc.accountId),
  }));

  res.status(200).json({
    totalBalance,
    accounts: formattedAccounts,
  });
};
