var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/ice-maghreb', router);
};

router.get('/', function (req, res, next) {
    res.render('ice-maghreb', {
      title: 'Ice Maghreb',
      flag: false
    });
});
