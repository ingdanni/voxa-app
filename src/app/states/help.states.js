function register(voxaApp) {
  voxaApp.onIntent("HelpIntent", () => {
    return {
      flow: "yield",
      reply: "Help",
      to: "shouldHandleHelp",
    };
  });

  voxaApp.onState("shouldHandleHelp", voxaEvent => {
    switch (voxaEvent.intent.name) {
      case "ScoreIntent":
        return {
          flow: "continue",
          to: "shouldHandleScore",
        };

      case "NewGameIntent":
        return {
          flow: "continue",
          to: "askHowManyWins",
        };

      case "StopIntent":
        return {
          flow: "terminate",
          reply: "Bye",
        };

      default:
        return {
          flow: "continue",
          to: "askHowManyWins",
        };
    }
  });
}

module.exports = register;
