const { insuranceData } = require("../data/mockData");


// /api/insurance
exports.insurance = async (req, res) => {
  try {
    res.json({
      message: "FR/RD data fetched",
      data: fRRDData,
    });
  } catch (error) {
    res.json({
      message: "FR/RD data not fetached",
    });
  }
};
