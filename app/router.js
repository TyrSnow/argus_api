'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/manage/admins', controller.admin.regist);
  router.post('/manage/admins/sessions', controller.admin.login);
};
