var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/jessr', router);
};

router.get('/', function (req, res, next) {
    res.render('jessr', {
      title: 'JESSR',
      flag: false
    });
});
