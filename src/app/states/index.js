const mainStates = require("./main.states");
const gameStates = require("./game.states");
const helpStates = require("./help.states");
const scoreStates = require("./score.states");

function register(voxaApp) {
  mainStates(voxaApp);
  gameStates(voxaApp);
  scoreStates(voxaApp);
  helpStates(voxaApp);
}

module.exports = register;
