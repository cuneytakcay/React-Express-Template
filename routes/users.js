const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json([{
		id: 1, name: "Cuneyt Akcay"
	}, {
		id: 2, name: "Jason Leo"
	}, {
		id: 3, name: "Chris Rolls"
	}, {
		id: 4, name: "Roch Mirabeau"
	}]);
});

module.exports = router;
