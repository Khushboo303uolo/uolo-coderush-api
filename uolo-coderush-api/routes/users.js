var express = require('express');
var router = express.Router();
let dataArray = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    data: dataArray
  })
});

router.post('/', function(req, res, next) {
  
  dataArray.push({name: req.body.name, numberOfChances: req.body.numberOfChances});
  
  res.json({
    data: dataArray
  })
});

module.exports = router;
