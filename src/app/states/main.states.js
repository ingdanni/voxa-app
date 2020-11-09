function register(voxaApp) {
  voxaApp.onIntent("LaunchIntent", {
    flow: "continue",
    reply: "Welcome",
    to: "askHowManyWins",
  });

  voxaApp.onIntent("CancelIntent", () => {
    return {
      flow: "terminate",
      reply: "Bye",
    };
  });

  voxaApp.onIntent("StopIntent", () => {
    return {
      flow: "terminate",
      reply: "Bye",
    };
  });

  voxaApp.onIntent("FallbackIntent", () => {
    return {
      flow: "yield",
      reply: "DonotUnderstand",
      to: "shouldHandleHelp",
    };
  });
}

module.exports = register;
