import * as mongoose from 'mongoose';
import { UserModel } from './index.d';
import { USER_AUTH } from '../../constants/user';

const { Schema } = mongoose;

let model = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  auth: {
    type: Number,
    enum: USER_AUTH,
    default: USER_AUTH.USER,
  },
  head: String,
  email: String,
  phone: String,
  sault: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  block: Boolean,
}, {
  timestamps: true,
});

const User = mongoose.model<UserModel.User>('User', model);
export default User;
