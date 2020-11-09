exports.name = function(voxaEvent) {
  return voxaEvent.model.name;
};

exports.userWins = function(voxaEvent) {
  return voxaEvent.model.userWins;
};

exports.alexaWins = function(voxaEvent) {
  return voxaEvent.model.alexaWins;
};

exports.numberOfWins = function(voxaEvent) {
  return voxaEvent.model.wins;
};
