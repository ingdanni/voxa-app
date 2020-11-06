function register(voxaApp) {
  voxaApp.onIntent("LaunchIntent", {
    flow: "continue",
    reply: "Welcome",
    to: "askHowManyWins"
  });
}

module.exports = register;
