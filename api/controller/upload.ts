import { controller, route, use } from "../core";
import * as multer from 'multer';
import * as fs from 'fs';
import { ERROR, SUCCESS } from "../helper/response";
import CODE from "../constants/code";

const csvUpload = multer({ dest: 'uploads/csv'});

@controller({
  path: '/upload'
})
class UploadController {
  @route('/csv', 'post')
  @use(csvUpload.single('file'))
  template_upload(req, res) { // 临时上传的文件，保存一个小时，或读取一次后自动删除
    const file = req.file;
    if (file.mimetype.toLowerCase() === 'text/csv') {
      return SUCCESS(req, res)(file.filename);
    }

    return ERROR(req, res)(CODE.MIMETYPE_ERROR);
  }
}

export default UploadController;
