const express = require("express");
const router = express.Router();


router.get("/survey",function(req, res){
    res.send("<h1>Start your survey</h1>");
  });
  
  router.get("/",function(req, res){
    res.send('<h1>Post something</h1>');
  });

  module.exports = router;