'use strict';

const Controller = require('egg').Controller;
const Code = require('../constant/code');

class AdminController extends Controller {
  async regist() {
    let { name, password } = this.ctx.request.body;
    
    if (await this.ctx.service.admin.create(name, password)) {
      return this.ctx.response.success(Code.REGIST_SUCCESS);
    }
    return this.ctx.response.error(Code.OPERATE_FAILURE);
  }
  async login() {
    let { user, password, remember } = this.ctx.request.body;
    let admin = await this.service.admin.find_user(user);
    if (admin) {
      if (this.ctx.helper.valid_password(admin, password)) {
        return this.ctx.response.success(Code.LOGIN_SUCCESS);
      }
    }
    return this.ctx.response.error(Code.USER_NOT_VALID);
  }
}

module.exports = AdminController;
