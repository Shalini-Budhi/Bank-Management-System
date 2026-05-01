// Mock User Data
export const user = {
  id: 1,
  name: "Harish",
  lastLogin: new Date(),
};

// Mock Accounts Data
export const accounts = [
  {
    accountId: "1234567890",
    type: "Savings",
    balance: 50000,
    status: "Active",
  },
  {
    accountId: "9876543210",
    type: "Current",
    balance: 25000,
    status: "Active",
  },
];
// Bills Data
export const bills = [
  {
    billId: 1,
    type: "Electricity",
    amount: 1200,
    dueDate: "2026-05-10",
  },
  {
    billId: 2,
    type: "Mobile",
    amount: 500,
    dueDate: "2026-05-05",
  },
];

// Insurance Data
export const insuranceData = [
  {
    id: 1,
    title: "Mediclaim",
    description: "Health insurance coverage",
  },
  {
    id: 2,
    title: "Life Insurance",
    description: "Life protection plan",
  },
];

// Cards Data
export const cards = [
  {
    id: 1,
    feature: "Split Bill",
    description: "Split expenses easily",
  },
  {
    id: 2,
    feature: "Set Limits",
    description: "Control your spending",
  },
];

// Loans Data
export const loans = [
  {
    id: 1,
    type: "Personal Loan",
    interestRate: "12%",
  },
  {
    id: 2,
    type: "Home Loan",
    interestRate: "8%",
  },
];

// module.exports = {
//   bills,
//   insurance,
//   cards,
//   loans
// };

export const fRRDData = [
  {
    fdId: "FD001",
    customerName: "Ravi Kumar",
    amount: 100000,
    interestRate: 6.5,
    tenureMonths: 12,
    maturityAmount: 106500,
    status: "active",
    startDate: "2026-01-01",
  },
  {
    fdId: "FD002",
    customerName: "Sneha Reddy",
    amount: 200000,
    interestRate: 7.0,
    tenureMonths: 24,
    maturityAmount: 228000,
    status: "active",
    startDate: "2026-02-10",
  },
  {
    fdId: "FD003",
    customerName: "Arjun Sharma",
    amount: 50000,
    interestRate: 6.0,
    tenureMonths: 12,
    maturityAmount: 53000,
    status: "closed",
    startDate: "2025-12-01",
  },
  {
    rdId: "RD001",
    customerName: "Ravi Kumar",
    monthlyAmount: 5000,
    interestRate: 6.5,
    tenureMonths: 12,
    totalInvestment: 60000,
    maturityAmount: 61950,
    status: "active",
    startDate: "2026-01-01",
  },
  {
    rdId: "RD002",
    customerName: "Sneha Reddy",
    monthlyAmount: 10000,
    interestRate: 7.0,
    tenureMonths: 24,
    totalInvestment: 240000,
    maturityAmount: 258000,
    status: "active",
    startDate: "2026-02-01",
  },
  {
    rdId: "RD003",
    customerName: "Arjun Sharma",
    monthlyAmount: 3000,
    interestRate: 6.0,
    tenureMonths: 12,
    totalInvestment: 36000,
    maturityAmount: 37080,
    status: "closed",
    startDate: "2025-11-01",
  },
];

