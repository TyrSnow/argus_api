'use strict';
const path = require('path');

module.exports = appInfo => {
  return {
    keys: `${appInfo.name}_sjxk39d3rehfasdf3`,
    middleware: ['error'],
    logger: {
      dir: path.join(appInfo.root, 'logs'),
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'Argus',
      },
    },
    passportGithub: {
      key: process.env.AUTH_GITHUB_ID,
      secret: process.env.AUTH_GITHUB_SECRET
    }
  };
};
