const { fRRDData } = require("../data/mockData");

exports.fdrd = async(req, res) =>{

  try {
    res.json({
      message: "FR/RD data fetched",
      data: fRRDData,
    });
    
  } catch (error) {
    res.json({
      message: "FR/RD data not fetached"
    })
  }
  

}