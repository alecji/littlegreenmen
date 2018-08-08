module.exports = function(sequelize, DataTypes) {
  var MealPair = sequelize.define("MealPair", {
    meal: DataTypes.TEXT,
    winePair: DataTypes.TEXT
  });

  MealPair.sync();

  // DATA FOR THE MODEL
  var mealData = [
    {
      meal: "Vegetables",
      winePair: "Dry White"
    },
    {
      meal: "Vegetables",
      winePair: "Sparkling"
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
  ];

  // CHECK TO SEE IF TABLE HAS BEEN SEEDED
  MealPair.findOne({ where: { meal: "Vegetables" } }).then(function(data) {
    // If no matches found seed the table
    if (!data) {
      console.log("Seeding MealPairs Table");
      MealPair.bulkCreate(mealData, { returning: true });

            // Otherwise leave the table alone

    } else {
      console.log("Table Previously Seeded");
    }
  });

  MealPair.sync();

  return MealPair;
};
