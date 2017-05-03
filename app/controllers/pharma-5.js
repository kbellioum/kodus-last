var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/pharma-5', router);
};

router.get('/', function (req, res, next) {
    res.render('pharma-5', {
      title: 'PHARMA 5',
      flag: false
    });
});
