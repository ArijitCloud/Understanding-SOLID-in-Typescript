export class FilePathJSONReader implements IJSONReader {
  filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  private async readJsonByFilePath(filePath: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await fetch(filePath);
        resolve(result.json());
      } catch (err) {
        reject(err);
      }
    });
  }

  public async readJson(): Promise<any> {
    return this.readJsonByFilePath(this.filePath);
  }
}
