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
        user: 'dev',
        password: 'dev123456',
        database: 'Argus',
      },
    },
  };
};
