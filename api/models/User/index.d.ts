import { Document } from 'mongoose';
import { USER_AUTH } from '../../constants/user';

declare namespace UserModel {
  interface UserInfo {
    _id: any
    head?: String
    email?: String
    phone?: String
  }
  interface UserBase extends UserInfo {
    name: string
    sault: string
    password: string
    auth: USER_AUTH
    block?: boolean
  }

  interface User extends UserBase, Document {}
}