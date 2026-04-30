exports.investApi = (req, res) => {
  const investments = [
    {
      investmentId: "INV001",
      investorName: "Ravi Kumar",
      amount: 100000,
      investmentType: "stocks",
      riskLevel: "high",
      expectedReturn: 15,
      durationMonths: 12,
      status: "active",
      createdAt: "2026-01-10",
    },
    {
      investmentId: "INV002",
      investorName: "Sneha Reddy",
      amount: 200000,
      investmentType: "mutual_funds",
      riskLevel: "medium",
      expectedReturn: 10,
      durationMonths: 24,
      status: "active",
      createdAt: "2026-02-05",
    },
    {
      investmentId: "INV003",
      investorName: "Arjun Sharma",
      amount: 50000,
      investmentType: "fixed_deposit",
      riskLevel: "low",
      expectedReturn: 6.5,
      durationMonths: 12,
      status: "closed",
      createdAt: "2025-12-20",
    },
    {
      investmentId: "INV004",
      investorName: "Priya Singh",
      amount: 300000,
      investmentType: "real_estate",
      riskLevel: "medium",
      expectedReturn: 12,
      durationMonths: 60,
      status: "active",
      createdAt: "2026-01-25",
    },
    {
      investmentId: "INV005",
      investorName: "Kiran Patel",
      amount: 150000,
      investmentType: "gold",
      riskLevel: "low",
      expectedReturn: 7,
      durationMonths: 18,
      status: "active",
      createdAt: "2026-03-01",
    },
  ];

  try {
    res.json({
      message: "Investments Fetched",
      Invest: investments,
    });
  } catch (error) {
    res.json({
      Message: "no invests data fetched",
    });
  }
};
