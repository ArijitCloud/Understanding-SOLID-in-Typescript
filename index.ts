import { App } from "./DIP_app";
import { LocalFileJsonReader } from "./LSP_LocalFileJsonReader";

// Read file from data.json
const app = new App(new LocalFileJsonReader("data/data.json"));
app.logJson();