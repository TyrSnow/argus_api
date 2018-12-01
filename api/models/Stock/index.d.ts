import { Document } from 'mongoose';

interface StockFinance {
  pe: number
  outstanding: number
  totals: number
  totalAssets: number
  liquidAssets: number
  fixedAssets: number
  reserved: number
  reservedPerShare: number
  esp: number
  bvps: number
  pd: number
  undp: number
  perundp: number
  rev: number
  profit: number
  gpr: number
  npr: number
  holders: number
  date: Date
}

interface StockInfo {
  finance: StockFinance
  history: Array<StockFinance>
}

interface StockBase extends StockInfo {
  code: number
  name: number
  industry: string
  area: string
  timeToMarket: Date
}

interface StockModel extends StockBase, Document {}
