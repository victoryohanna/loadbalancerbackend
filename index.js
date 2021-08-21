const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db_init = require("./config/db");
const { success } = require("consola");

require("dotenv").config();
const port1 = process.env.PORT || 5001;
const port2 = process.env.PORT || 5002;
const port3 = process.env.PORT || 5003;
const port4 = process.env.PORT || 5004;

const ports = [port1, port2, port3,];

const app = express();

//Database configuration
db_init();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const api = require("./routes/router");  
app.use("/", api);

ports.map((port) => {
  app.listen(port, () => {
    success({ message: `App listenning on Port ${port} `, badge: true });
  });
});
