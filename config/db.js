const mongoose = require("mongoose");
const { success, error } = require("consola");

require("dotenv").config();
const conn_string = process.env.CONN;

const db_init = async () => {  
  await mongoose
    .connect(conn_string, {
      useNewUrlParser: true,
      useFindAndModify: false,   
      useUnifiedTopology: true,
    })
    .then(() => {
      success({ message: `Successfuly connected to Database`, badge: true });
    })
    .catch(() => {
      error({ message: `Connection fail, please try again`, badge: true });
    });
};

module.exports = db_init;   
