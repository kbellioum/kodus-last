var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/cheikh-khalifa', router);
};

router.get('/', function (req, res, next) {
    res.render('cheikh-khalifa', {
      title: 'Fondation Cheikh Khalifa',
      flag: false
    });
});
