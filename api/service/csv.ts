import * as csvParser from 'csv-parse';
import { service } from "../core";

@service()
class CsvService {
  load_csv_file(
    csv_content: string,
  ): Promise<Array<Object>> {
    return new Promise((resolve, reject) => {
      csvParser(csv_content, (err, output: Array<Array<string>>) => {
        if (err) {
          return reject(err);
        }

        const [ head, ...data] = output;
        const column_count = head.length;
        return data.map((arrData) => {
          return head.reduce((r, column, index) => {
            r[column] = arrData[index];
            return r;
          }, {});
        });
      });
    });
  }
}

export default CsvService;
