import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Player {
  constructor(data) {
    this.id = generateId();
    this.name = data.name;
    this.score = 0;
  }

  get PlayerTemplate() {
    return `
    <div class="d-flex justify-content-between">
                <h5 class="selectable" onclick="app.psController.setActive('${this.id}')" >${this.name}</h5>
                <h5>Score: ${this.score}
                <i onclick = "app.psController.removePlayer('${this.id}')"class="mdi btn mdi-delete text-danger"></i>
                </h5>
              </div>
    `;
  }
  get ActiveTemplate() {
    return `
    <div>
    <h1>${this.name} Score: ${this.score}</h1>
  </div>
    `;
  }

  get AfTemplate() {
    return `
    <h1>${appState.activeFruit}</h1>
    `;
  }
}
