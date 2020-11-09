function register(voxaApp) {
  voxaApp.onIntent("ScoreIntent", () => {
    return {
      flow: "continue",
      to: "shouldHandleScore",
    };
  });

  voxaApp.onState("shouldHandleScore", voxaEvent => {
    const userWins = parseInt(voxaEvent.model.userWins);
    const alexaWins = parseInt(voxaEvent.model.alexaWins);

    if (userWins > 0 || alexaWins > 0) {
      return {
        flow: "continue",
        reply: "SayTheScore",
        to: "askUserChoice",
      };
    }

    return {
      flow: "continue",
      reply: "SayEmptyScore",
      to: "askIfStartANewGame",
    };
  });
}

module.exports = register;
