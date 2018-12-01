import { service } from "../core/src";
import CategoryController from "../controller/category";

@service()
class StockTagService {
  constructor(
    private categoryService: CategoryController,
  ) {}

  can_tag_set(
    stock_id: string,
    tag_id: string,
  ) {

  }
}

export default StockTagService;
