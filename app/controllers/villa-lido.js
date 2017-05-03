var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/villa-lido', router);
};

router.get('/', function (req, res, next) {
    res.render('villa-lido', {
      title: 'VILLA LIDO',
      flag: false
    });
});
