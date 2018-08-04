var data = require("./data");

module.exports = function(sequelize, DataTypes) {
  var FoodWineExample = sequelize.define("FoodWineExample", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  
  return Example;
};
