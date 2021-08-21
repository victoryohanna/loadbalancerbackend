
const Response = require("../model/serverResponseModel");

const getResponse = (req, res) => {
  Response.find((err, response) => {
    if (err) {
      return res.status(500).json({ status: err });
    }
    if (!response) {
      return res.status(400).json({
        message: " Records not available",
      });
    }
    return res.status(200).json({
      status: "ok",
      response,
    });
  });
};

module.exports = {  getResponse };
