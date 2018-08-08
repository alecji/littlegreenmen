module.exports = function(sequelize, DataTypes) {
  var History = sequelize.define("History", {
    meal: DataTypes.TEXT,
    winePairings: DataTypes.TEXT
  });

  History.sync();

  return History;
};
