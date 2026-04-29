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
// Bills Data
const bills = [
  {
    billId: 1,
    type: "Electricity",
    amount: 1200,
    dueDate: "2026-05-10"
  },
  {
    billId: 2,
    type: "Mobile",
    amount: 500,
    dueDate: "2026-05-05"
  }
];

// Insurance Data
const insurance = [
  {
    id: 1,
    title: "Mediclaim",
    description: "Health insurance coverage"
  },
  {
    id: 2,
    title: "Life Insurance",
    description: "Life protection plan"
  }
];

// Cards Data
const cards = [
  {
    id: 1,
    feature: "Split Bill",
    description: "Split expenses easily"
  },
  {
    id: 2,
    feature: "Set Limits",
    description: "Control your spending"
  }
];

// Loans Data
const loans = [
  {
    id: 1,
    type: "Personal Loan",
    interestRate: "12%"
  },
  {
    id: 2,
    type: "Home Loan",
    interestRate: "8%"
  }
];

module.exports = {
  user,
  accounts,
  bills,
  insurance,
  cards,
  loans
};