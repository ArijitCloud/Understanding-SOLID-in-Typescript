export class FileBlobJSONReader implements IJSONReader {
  private file: Blob;

  constructor(file: Blob) {
    this.file = file;
  }
  public async readJsonByFileBlob(file: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        resolve(event.target?.result);
      };
      reader.onerror = (event: ProgressEvent<FileReader>) => {
        reject(event.target?.error);
      };
      reader.readAsText(file);
    });
  }

  public async readJson(): Promise<any> {
    return this.readJsonByFileBlob(this.file);
  }
}
