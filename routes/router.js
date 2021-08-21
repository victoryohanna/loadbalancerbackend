const express = require("express");
const router = express.Router();

const {  getResponse } = require("../controllers/serverResponseController");

router.get("/request", getResponse);


module.exports = router;  
