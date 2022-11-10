import { PsController } from "./Controllers/psController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  psController = new PsController();
}

window["app"] = new App();
