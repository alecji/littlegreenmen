
module.exports = function (sequelize, DataTypes) {
  var MealPair = sequelize.define("MealPair", {
    meal: DataTypes.TEXT,
    winePair: DataTypes.TEXT
  });

  var mealData = [
    {
      meal: "Vegetables",
      winePair: "Dry White",
    },
    {
      meal: "Vegetables",
      winePair: "Sparkling",
    },
    {
      meal: "Roasted Vegetables",
      winePair: "Dry White"
    },
    {
      meal: "Roasted Vegetables",
      winePair: "Light Red"
    },
    {
      meal: "Roasted Vegetables",
      winePair: "Medium Red"
    },
    {
      meal: "Fish",
      winePair: "Dry White"
    },
    {
      meal: "Fish",
      winePair: "Rich White"
    },
    {
      meal: "Fish",
      winePair: "Sparkling"
    },
    {
      meal: "Shellfish",
      winePair: "Rich White"
    },
    {
      meal: "Shellfish",
      winePair: "Light Red"
    },
    {
      meal: "White Meat",
      winePair: "Rich White"
    },
    {
      meal: "White Meat",
      winePair: "Light Red"
    },
    {
      meal: "White Meat",
      winePair: "Medium Red"
    },
    {
      meal: "Red Meat",
      winePair: "Medium Red"
    },
    {
      meal: "Red Meat",
      winePair: "Bold Red"
    },
    {
      meal: "Sweets",
      winePair: "Sweet White"
    },
    {
      meal: "Sweets",
      winePair: "Dessert Wine"
    }
  ]

  setTimeout(function () {

    MealPair.bulkCreate(mealData, { returning: true });

  }, 5000);
  return MealPair;
};

