import { service } from "../core";
import BaseService from "../common/BaseService";
import Category from "../models/Category";
import CODE from "../constants/code";
import { CategoryInfo } from "../models/Category/index.d";
import mask_object from "../tools/maskObject";

@service()
class CategoryService extends BaseService {
  model = Category;

  create_category_tag(
    category_id: string,
    code: string,
    name: string,
  ) {
    return this.getSelective(category_id).then(category => {
      if (category) {
        category.tags.push({
          code,
          name,
        });

        return category.save();
      }

      return CODE.CATEGORY_NOT_EXIST;
    });
  }

  get_category_by_tag_id(
    tag_id: string,
    category_id?: string,
  ) {
    return Category.findOne({
      tags: { _id: tag_id }
    });
  }

  update_category_info(
    category_id: string,
    category: CategoryInfo
  ) {
    return this.model.findOneAndUpdate({
      _id: category_id,
    }, mask_object(category, ['code', 'kind', 'name', 'single']), {
      new: true,
    }).then(res => {
      if (res) {
        return Promise.resolve(res);
      }

      return Promise.reject(CODE.CATEGORY_NOT_EXIST);
    });
  }
}

export default CategoryService;
