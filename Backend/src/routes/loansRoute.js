exports.loansApi = (req, res) => {
  const loansdata = [
    {
      loanId: "LN001",
      customerName: "Ravi Kumar",
      amount: 250000,
      interestRate: 10.5,
      tenureMonths: 24,
      status: "approved",
      loanType: "personal",
      createdAt: "2026-01-15",
    },
    {
      loanId: "LN002",
      customerName: "Sneha Reddy",
      amount: 500000,
      interestRate: 8.2,
      tenureMonths: 36,
      status: "pending",
      loanType: "home",
      createdAt: "2026-02-10",
    },
    {
      loanId: "LN003",
      customerName: "Arjun Sharma",
      amount: 150000,
      interestRate: 12.0,
      tenureMonths: 12,
      status: "rejected",
      loanType: "personal",
      createdAt: "2026-03-05",
    },
    {
      loanId: "LN004",
      customerName: "Priya Singh",
      amount: 800000,
      interestRate: 7.5,
      tenureMonths: 60,
      status: "approved",
      loanType: "home",
      createdAt: "2026-01-25",
    },
    {
      loanId: "LN005",
      customerName: "Kiran Patel",
      amount: 300000,
      interestRate: 9.0,
      tenureMonths: 24,
      status: "approved",
      loanType: "car",
      createdAt: "2026-02-20",
    },
  ];

  try {
    res.json({
      message: "Loans Fetched",
      loans: loansdata,
    });
  } catch (error) {
    res.json({
      "message": "loans not Fetched"
    })
  }
};
