import { service } from "../core";
import * as fs from 'fs';
import * as path from 'path';

@service()
class UploadService {
  get_csv_file(
    filepath: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(path.resolve(process.cwd(), 'uploads/csv', filepath), { encoding: 'utf8' }, (err, content) => {
        if (err) {
          return reject(err);
        }

        return resolve(content);
      });
    });
  }
}

export default UploadService;
