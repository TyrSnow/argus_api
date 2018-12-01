import * as mongoose from 'mongoose';
import { StockModel } from './index.d';

const { Schema } = mongoose;

let model = new Schema({
  code: {
    type: String,
    unique: true,
  },
  name: String,
  industry: String,
  area: String,
  timeToMarket: Date,
  finance: {
    pe: Number,
    outstanding: Number,
    totals: Number,
    totalAssets: Number,
    liquidAssets: Number,
    fixedAssets: Number,
    reserved: Number,
    reservedPerShare: Number,
    esp: Number,
    bvps: Number,
    pd: Number,
    undp: Number,
    perundp: Number,
    rev: Number,
    profit: Number,
    gpr: Number,
    npr: Number,
    holders: Number,
    date: Date,
  },
}, {
  timestamps: true,
});

const Stock = mongoose.model<StockModel>('Stock', model);
export default Stock;
