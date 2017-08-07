
var friends = require("../data/friends.js");




module.exports = function(app) {
  


  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  

  app.post("/api/friends", function(req, res) {
    


    var newFriend = req.body;

  data.friends.push(newFriend);

  res.json(data.friends);

  });
}
