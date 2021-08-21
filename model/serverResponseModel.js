const mongoose = require("mongoose");
const schema = mongoose.Schema;

const serverResponse = schema({
  // Id: {
  //   type: String,
  // },
  data: {
    type: String,
  }, 
  
});
const responseModel = mongoose.model("result", serverResponse);
module.exports = responseModel;
