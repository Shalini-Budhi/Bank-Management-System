// Mock User Data
const user = {
  id: 1,
  name: "Harish",
  lastLogin: new Date()
};

// Mock Accounts Data
const accounts = [
  {
    accountId: "1234567890",
    type: "Savings",
    balance: 50000,
    status: "Active"
  },
  {
    accountId: "9876543210",
    type: "Current",
    balance: 25000,
    status: "Active"
  }
];

module.exports = {
  user,
  accounts
};