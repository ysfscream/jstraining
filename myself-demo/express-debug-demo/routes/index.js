var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let sort = req.param('sort')
  res.render('index', { title: 'Express' });
});

module.exports = router;
