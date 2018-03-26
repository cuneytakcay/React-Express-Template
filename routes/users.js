var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // And insert something like this instead:
  res.json([{
  	id: 1,
  	firstName: "Cuneyt",
  	lastName: "Akcay"
  }, {
  	id: 2,
  	firstName: "Jason",
  	lastName: "Leo"
  }, {
  	id: 3,
  	firstName: "Chris",
  	lastName: "Rolls"
  }, {
  	id: 4,
  	firstName: "Roch",
  	lastName: "Mirabeau"
  }]);
});

module.exports = router;
