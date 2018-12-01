import * as fs from 'fs';
import { controller, route } from "../core";
import StockService from '../service/stock';
import { SUCCESS, ERROR } from '../helper/response';
import UploadService from '../service/upload';

@controller({
  path: '/stocks',
})
class StockController {
  constructor(
    private stockService: StockService,
    private uploadService: UploadService,
  ) {}

  @route('/batch', 'put')
  update_batch(req, res) {
    const { id } = req.body;

    this.uploadService.get_csv_file(id).then((content) => {
      return this.stockService.batch_update(content);
    }).then(
      SUCCESS(req, res),
    ).catch(ERROR(req, res));
  }

  @route('/')
  get_stock_list(req, res) {
    const { pageSize = 10, current = 1 } = req.query;

    this.stockService.page({}, {}, pageSize, current).then(
      SUCCESS(req, res),
    ).catch(
      ERROR(req, res),
    );
  }
}

export default StockController;
