import { appState } from "../AppState.js";
import { psService } from "../Services/psService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlayer() {
  let template = "";
  appState.players.forEach((p) => (template += p.PlayerTemplate));
  setHTML("players-score", template);
}

export class PsController {
  constructor() {
    _drawPlayer();
    appState.on("players", _drawPlayer);
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
}
