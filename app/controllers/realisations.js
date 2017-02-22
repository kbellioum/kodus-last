var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/realisations', router);
};

router.get('/', function (req, res, next) {
    res.render('realisations', {
      title: 'Realisations',
      flag: false
    });
});
