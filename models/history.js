module.exports = function (sequelize, DataTypes) {
    var History = sequelize.define("History", {
      winePairArray: DataTypes.TEXT
    });
  
    Histoy.sync();

    return History;
};
  