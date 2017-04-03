var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/passage-fithness', router);
};

router.get('/', function (req, res, next) {
    res.render('passage-fithness', {
      title: 'Passage Fithness',
      flag: false
    });
});
