import { Document } from 'mongoose';

interface StockCategoryInfo {
  value: string
  date: Date
}

interface StockCategoryBase {
  stock: string
  category: string
  infos: [StockCategoryInfo]
}

interface StockModel extends StockCategoryBase, Document {}
