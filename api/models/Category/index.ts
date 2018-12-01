/**
 * 维度 比如行业、市值等等，代表一种分类的方向
 * 每个维度下面可以包含很多的标签
 */
import * as mongoose from 'mongoose';
import { CategoryModel } from './index.d';
import { CATEGORY_TYPE } from '../../constants/category';

const { Schema } = mongoose;

let model = new Schema({
  name: {
    type: String,
    unique: true,
  },
  code: {
    type: String,
    unique: true,
  },
  kind: {
    type: Number,
    enum: CATEGORY_TYPE,
    default: CATEGORY_TYPE.TAG,
  },
  tags: [{
    name: String,
    code: String,
  }],
  single: Boolean, // 该维度下，标签只能有一个
}, {
  timestamps: true,
});

const Category = mongoose.model<CategoryModel>('Category', model);
export default Category;
