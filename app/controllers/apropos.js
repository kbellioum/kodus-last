var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/apropos', router);
};

router.get('/', function (req, res, next) {
    res.render('apropos', {
      title: 'Apropos',
      flag: true
    });
});
