export enum USER_AUTH {
  GUEST = -1,
  USER = 0,
  ADMIN,
  ROOT,
}

export const hasAuth = (expect: USER_AUTH, auth: USER_AUTH) => {
  return expect <= auth;
}
