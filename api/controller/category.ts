import { controller, route } from "../core/src";
import CategoryService from "../service/category";
import { SUCCESS, ERROR } from "../helper/response";
import { auth } from '../middleware/auth';
import { USER_AUTH } from "../constants/user";

@controller({
  path: '/category',
  use: [auth(USER_AUTH.USER)]
})
class CategoryController {
  constructor(
    private categoryService: CategoryService,
  ) {}

  @route('/:id', 'get')
  get_one(req, res) {
    const { id } = req.params;

    this.categoryService.getSelective(id).then(
      SUCCESS(req, res),
    ).catch(ERROR(req, res));
  }

  @route('', 'get')
  list(req, res) {
    const { pageSize, current, all } = req.query;

    if (all || (!pageSize && !current)) {
      return this.categoryService.query({}).then(
        SUCCESS(req, res),
      ).catch(ERROR(req, res));
    }

    return this.categoryService.page({}, {}, pageSize || 10, current || 1).then(
      SUCCESS(req, res),
    ).catch(ERROR(req, res));
  }

  @route('', 'post')
  create(req, res) {
    const { body } = req;
    const { _id } = req.user;

    this.categoryService.create(body, _id).then(
      SUCCESS(req, res),
    ).catch(ERROR(req, res));
  }

  @route('/:id', 'put')
  update_category_info(req, res) {
    const { id } = req.params;
    const { body } = req;

    this.categoryService.update_category_info(id, body).then(
      SUCCESS(req, res),
    ).catch(ERROR(req, res));
  }
}

export default CategoryController;
