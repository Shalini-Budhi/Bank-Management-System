const { accounts, user } = require("../data/mockData");

exports.homeRouter = async (req, res) => {
  try {
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
  } catch (error) {
    res.json(error);
  }
};
