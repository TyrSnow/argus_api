function E(code, msg, status = 200) {
  return {
    code,
    msg,
    status,
  };
}

module.exports = {
  // 公用成功操作的字段
  OPERATE_SUCCESS: E(10200, '操作成功'),
  REFRESH_SUCCESS: E(10200, '刷新成功'),
  LOAD_SUCCESS: E(10200, '加载成功'),
  LOGIN_SUCCESS: E(10200, '登陆成功'),
  REGIST_SUCCESS: E(10200, '注册成功'),

  // 公用失败
  OPERATE_FAILURE: E(10300, '操作失败'),
  LOAD_FAILURE: E(10301, '加载失败'),
  UNEXPECT_ERROR: E(10302, '意外的错误', 500),
  // 用户
  USER_NOT_EXIST: E(10400, '用户不存在'),
  USER_NOT_VALID: E(10401, '用户名或密码错误'),
  REQUEST_RELOGIN: E(10402, '请重新登陆账号'),
  REQUEST_HIGHT_AUTH: E(10403, '需要更高的权限'),

  // 用户操作部分

  // 管理员操作部分
}