'use strict';
module.exports = {
  success: function (code) {
    this.status = code.status;
    this.body = {
      msg: code.msg,
    };
  },
  data: function (data, code) {
    this.status = code.status;
    this.body = {
      data,
      msg: code.msg,
    };
  },
  list: function (list, page, code) {
    this.status = code.status;
    this.body = {
      list,
      page,
      msg: code.msg,
    }
  },
  error: function (code) {
    this.status = code.status;
    this.body = {
      msg: code.msg,
    };
  },
};
