import fs from "fs";
export class LocalFileJsonWriter implements IJSONWriter{
    private filePath: string;
    private data: any;
    constructor(filePath: string, data: any) {
        this.filePath = filePath;
        this.data = data;
    }

    writeJson():Promise<void>{
        return new Promise((resolve, reject) => {
          fs.writeFile(this.filePath, JSON.stringify(this.data), (err) => {
            if (err) {
              reject(err);
            }
            resolve();
          });
        });
    }
}