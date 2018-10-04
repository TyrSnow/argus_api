const config = {
  port: 8081,
  secretKey: 'bca.$2354',
  db: {
    uri: 'mongodb://127.0.0.1:27017/argus',
    user: '',
    password: ''
  },
  upload: {
    temp: 'uploads',
    static: 'D:/nginx-1.12.2/html/',
    prefix: 'medias'
  },
  log: {
    appenders: {
      out: {
        type: 'console'
      },
      app: {
        type: 'dateFile',
        filename: 'logs/access.log',
        pattern: '.yyyy-MM-dd-hh.log',
        alwaysIncludePattern: true,
        maxLogSize: 1024,
        backups: 4
      },
      error: {
        type: 'dateFile',
        filename: 'logs/error.log',
        pattern: '.yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        maxLogSize: 1024,
        backups: 4
      },
    },
    categories: {
      default: {
        appenders: [
          'out', 'app'
        ],
        level: 'debug'
      },
      error: {
        appenders: [
          'out', 'error'
        ],
        level: 'debug'
      },
    },
    replaceConsole: true
  }
}

export default config;
