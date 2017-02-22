var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/references', router);
};

router.get('/', function (req, res, next) {
    res.render('references', {
      title: 'References',
      flag: false
    });
});
