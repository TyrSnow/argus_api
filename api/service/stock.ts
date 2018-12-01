import * as csvParser from 'csv-parse';
import { service } from "../core";
import BaseService from "../common/BaseService";
import Stock from "../models/Stock";

@service()
class StockService extends BaseService {
  protected model = Stock;

  /**
   * 更新股票数据
   * @param stock 
   * @param finance 
   */
  update_stock(
    stock,
    info,
    finance,
  ) {
    // 比较finance的数据变了没，变了则更新并把旧数据放history里面
  }

  update_or_create_stock(
    flatStock,
  ) {
    const { code, name, industry, area, timeToMarket, ...finance } = flatStock;

    return this.queryOne({ code }).then(stock => {
      if (stock) {
        return this.update_stock(stock, {
          code,
          name,
          industry,
          area,
          timeToMarket
        }, finance);
      }

      return this.create({
        code,
        name,
        industry,
        area,
        timeToMarket,
        finance,
      });
    });
  }

  /**
   * 批量添加或更新
   * @param csv_content 
   */
  batch_update(
    csv_content: string,
  ) {
    return new Promise((resolve, reject) => {
      csvParser(csv_content, (err, output) => {
        if (err) {
          return reject(err);
        }

        const [ head, ...stocks] = output;
        const STOCK_DATA_COUNT = head.length;
        return Promise.all(stocks.map(arrStock => {
          let stock = {};
          for (let i = 0; i < STOCK_DATA_COUNT; i++) {
            stock[head[i]] = arrStock[i];
          }

          return this.update_or_create_stock(stock);
        }));
      });
    });
  }
}

export default StockService;
