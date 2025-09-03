var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'X༙྇҉ ꓨ༙྇҉ H༙྇҉  Pandore Rossi  ꓕ༙྇҉ ꓶ༙྇҉ ⅄༙྇҉ Z༙྇҉ ꓵ༙྇҉ ꓨ༙྇҉' });
});

module.exports = router;
