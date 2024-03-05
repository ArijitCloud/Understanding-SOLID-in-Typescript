import { FilePathJSONReader } from "./SRP_OCP_FilePathJsonReader";

export class App {
  private fileReader: IJSONReader;
  constructor(fileReader: IJSONReader) {
    this.fileReader = fileReader;
  }

    public async logJson():Promise<void>{
        console.log(await this.fileReader.readJson());
    }
}
