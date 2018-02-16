'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async create(name, password, head = '') {
    let sault = this.ctx.helper.generate_sault();
    let hashed_password = this.ctx.helper.hash_password(name, sault, password);

    let result = await this.app.mysql.insert('admins', {
      name,
      sault,
      password: hashed_password,
      head,
    });

    if (result.affectedRows === 1) {
      return true;
    }
    return false;
  }

  async find_user(name) {
    let user = await this.app.mysql.select('admins', {
      name: name
    });
    return user[0];
  }
}

module.exports = AdminService;
