import { Player } from "./Models/p.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState, saveState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);

  players = loadState("players", [Player]);

  /** @type {import('./Models/p').Player | null} */
  activePlayer = null;
  fruit = ["pear", "banana", "apple", "strawberry"];
  activeFruit = null;
}
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
