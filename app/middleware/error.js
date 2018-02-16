'use strict';
const Code = require('../constant/code');

/** 避免未处理的错误返回给客户端 */
module.exports = () => {
  return async function (ctx, next) {
    try {
      await next();
    } catch (e) {
      ctx.logger.error(e);
      ctx.response.error(Code.UNEXPECT_ERROR);
    }
  }
};