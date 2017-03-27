var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'xml-project'
    },
    port: process.env.PORT || 8080
    //db: 'mongodb://localhost/xml-project-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'xml-project'
    },
    port: process.env.PORT || 8080
    //db: 'mongodb://localhost/xml-project-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'xml-project'
    },
    port: process.env.PORT || 8080
    //db: 'mongodb://localhost/xml-project-production'
  }
};

module.exports = config[env];
