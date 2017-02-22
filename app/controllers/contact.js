var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/contact', router);
};

router.get('/', function (req, res, next) {
    res.render('contact', {
      title: 'Contact',
      flag: false
    });

});
