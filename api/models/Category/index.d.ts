import { Document } from 'mongoose';
import { CATEGORY_TYPE } from '../../constants/category';

interface TagInfo {
  code: string
  name: string
}

interface CategoryInfo {
  name: string
  code: string
  single: boolean
  kind: CATEGORY_TYPE
  tags: Array<TagInfo>
}

interface CategoryModel extends CategoryInfo, Document {}
