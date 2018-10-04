import * as express from 'express';
import * as log4js from 'log4js';
import * as bodyParser from 'body-parser';
import { Application } from './core';

import './start';
const logger = log4js.getLogger('default');

class App extends Application {
  constructor(config) {
    super(config);
  }

  private middlewares = [
    log4js.connectLogger(logger, {
      level: 'auto',
      format: ':method :url',
    }),
    bodyParser.json({ limit: '5mb' }),
    bodyParser.urlencoded({ extended: true }),
  ];
}

export default App;
