exports.billsandRecharge = async (req, res) => {
  const databills = [
    {
      billType: "Recharge",
      phoneNumber: "9866718",
      simProvider: "jio",
    },
    {
      billType: "Recharge",
      phoneNumber: "9963165",
      simProvider: "airtel",
    },
    {
      billType: "Electricity Bills",
      billNumber: "9963165",
      billProvider: "apdscl",
    },

    {
      billType: "DTH",
      billNumber: "9963165",
      billProvider: "apdscl",
    },
  ];

  console.log(databills);
  try {
    res.json({
      message: "data feached bills and Recharge",
      data: databills,
    });
  } catch (error) {
    console.log({
      message: "not fetched"
    });
  }
};
