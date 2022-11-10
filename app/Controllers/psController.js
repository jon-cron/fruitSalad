import { appState } from "../AppState.js";
import { psService } from "../Services/psService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlayer() {
  let template = "";
  appState.players.forEach((p) => (template += p.PlayerTemplate));
  setHTML("players-score", template);
}
function _drawActivePlayer() {
  let activePlayer = appState.activePlayer;
  setHTML("activePlayer", activePlayer.ActiveTemplate);
}
function _drawActiveFruit() {
  setHTML("activeFruit", `<h1>${appState.activeFruit}</h1>`);
}

export class PsController {
  constructor() {
    _drawPlayer();
    appState.on("players", _drawPlayer);
    appState.on("activePlayer", _drawActivePlayer);
    appState.on("activeFruit", _drawActiveFruit);
  }

  createPlayer() {
    window.event.preventDefault();
    let form = window.event.target;
    let formData = getFormData(form);
    psService.createPlayer(formData);
  }
  removePlayer(playerId) {
    let removedPlayer = appState.players.find((p) => p.id == playerId);
    psService.removePlayer(removedPlayer);
  }
  setActive(playerId) {
    let activePlayer = appState.players.find((p) => p.id == playerId);
    // console.log(activePlayer);
    psService.activePlayer(activePlayer);
    psService.startGame();
  }
}
