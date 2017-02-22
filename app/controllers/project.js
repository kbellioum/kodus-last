var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/projects', router);
};

router.get('/', function (req, res, next) {
    res.render('projects', {
      title: 'Projets',
      flag: false
    });
});
