import { FilePathJSONReader } from "./SRP_OCP_FilePathJsonReader";
import fs from "fs";

export class LocalFileJsonReader extends FilePathJSONReader {
  constructor(filePath: string) {
    super(filePath);
  }

  public async readJson(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      //read from local file system
      fs.readFile(this.filePath, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
}
