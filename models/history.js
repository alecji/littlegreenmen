
module.exports = function (sequelize, DataTypes) {
    var History = sequelize.define("History", {
        meal: DataTypes.TEXT,
        winePairings: DataTypes.TEXT,
        winePairingsSubTypes: DataTypes.TEXT,
        wineSubType: DataTypes.TEXT,
        bookSuggestion: DataTypes.TEXT
        
    });

    History.sync();

  History.sync();

  return History;
};
