const sendMoneyData = [
  {
    transactionId: "TXN001",
    senderName: "Ravi Kumar",
    receiverName: "Sneha Reddy",
    amount: 2500,
    method: "UPI",
    upiId: "sneha@upi",
    status: "success",
    date: "2026-04-10",
  },
  {
    transactionId: "TXN002",
    senderName: "Arjun Sharma",
    receiverName: "Priya Singh",
    amount: 10000,
    method: "NetBanking",
    accountNumber: "123456789012",
    ifsc: "SBIN0001234",
    status: "success",
    date: "2026-04-11",
  },
  {
    transactionId: "TXN003",
    senderName: "Kiran Patel",
    receiverName: "Rahul Das",
    amount: 1500,
    method: "Mobile",
    mobileNumber: "9876543210",
    status: "pending",
    date: "2026-04-12",
  },
  {
    transactionId: "TXN004",
    senderName: "Anjali Verma",
    receiverName: "Meena Iyer",
    amount: 5000,
    method: "UPI",
    upiId: "meena@oksbi",
    status: "failed",
    date: "2026-04-13",
  },
  {
    transactionId: "TXN005",
    senderName: "Vikram Joshi",
    receiverName: "Pooja Nair",
    amount: 20000,
    method: "NetBanking",
    accountNumber: "987654321098",
    ifsc: "HDFC0005678",
    status: "success",
    date: "2026-04-14",
  },
];

exports.sendMoney = async (req, res) => {
  try {
    res.json({
      message: "send money is fetched",
      data: sendMoneyData,
    });
  } catch (error) {
    res.json({
      message: "send money not fetached",
      error,
    });
  }
};
