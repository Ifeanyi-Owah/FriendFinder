const express = require("express");
const router = express.Router();


var friends = require("../data/friends");

router.get("/friends", function (req, res) {
   res.json(friends);
});

router.post("/friends", function (req, res) {
   var bestMatch = {
      name: "",
      photo: "",
      diff: 1000000
   };
   var newUser = req.body;

   friends.forEach(function (friend) {
      var userScores = newUser.scores;
      var matchScores = friend.scores;
      var diff = 0;
      for (var i = 0; i < 10; i++) {
         diff = diff + (Math.abs(parseInt(userScores[i]) - parseInt(matchScores[i])));
      }
      if (diff < bestMatch.diff) {
         bestMatch.name = friend.name;
         bestMatch.photo = friend.photo;
         bestMatch.diff = diff;
      }
   });

   friends.push(newUser);
   // console.log(friends);
   res.json(bestMatch);
});

module.exports = router;