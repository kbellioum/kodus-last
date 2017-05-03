var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/ela', router);
};

router.get('/', function (req, res, next) {
    res.render('ela', {
      title: 'ELA',
      flag: false
    });
});
