import { appState } from "../AppState.js";
import { Player } from "../Models/p.js";
import { saveState } from "../Utils/Store.js";

class PsService {
  createPlayer(formData) {
    let newPlayer = new Player(formData);
    appState.players = [...appState.players, newPlayer];
    saveState("players", appState.players);
    console.log(appState.players);
    // console.log(formData);
    // appState.players.push(newPlayer);
    // appState.players = appState.players;
  }
  removePlayer(removedPlayer) {
    let newPlayersArr = appState.players.filter(
      (p) => p.id !== removedPlayer.id
    );
    appState.players = newPlayersArr;

    saveState("players", appState.players);
    console.log(appState.players);
  }
  activePlayer(ap) {
    appState.activePlayer = ap;
  }
  startGame() {
    this.randomFruit();
  }
  randomFruit() {
    appState.activeFruit =
      appState.fruit[Math.floor(Math.random() * appState.fruit.length)];
  }
}

export const psService = new PsService();
