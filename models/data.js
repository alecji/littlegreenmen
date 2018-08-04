
// All Data
var allData = [
    {
        type: "Dry White",
        subtypes: ["Sauvignon Blanc", "Grüner Veltliner", "Pinot Grigio", "Albariño"],
        mealPair: ["Vegetables", "Roasted Vegetables", "Fish"],
        characteristics: "placeholder",
        isRed: false
    },
    {
        type: "Sweet White",
        subtypes: ["Gewürztraminer", "Müller-Thurgau", "Malvasia", "Moscato", "Riesling"],
        mealPair: ["Sweets"],
        characteristics: "placeholder",
        isRed: false
    },
    {
        type: "Rich White",
        subtypes: ["Chardonnay", "Roussanne", "Marsanne", "Viognier"],
        mealPair: ["Fish", "Shellfish", "White Meat"],
        characteristics: "placeholder",
        isRed: false
    },
    {
        type: "Sparkling",
        subtypes: ["Champagne", "Prosecco", "Cava"],
        mealPair: ["Vegtables", "Fish"],
        characteristics: "placeholder",
        isRed: false
    },
    {
        type: "Light Red",
        subtypes: ["St. Laurent", "Pinot Noir", "Zweigelt", "Gamay"],
        mealPair: ["Roasted Vegetables", "Shellfish", "White Meat"],
        characteristics: "placeholder",
        isRed: true
    },
    {
        type: "Medium Red",
        subtypes: ["Tempranillo", "Sangiovese", "Zinfandel", "Grenache", "Merlot"],
        mealPair: ["Roasted Vegetables", "White Meat", "Red Meat"],
        characteristics: "placeholder",
        isRed: true
    },
    {
        type: "Bold Red",
        subtypes: ["Cabernet Sauvignon", "Monastrell", "Aglianico", "Malbec", "Syrah"],
        mealPair: ["Red Meat"],
        characteristics: "placeholder",
        isRed: true
    },
    {
        type: "Dessert",
        subtypes: ["Late Harvest", "Ice Wine", "Sherry", "Port"],
        mealPair: ["Sweets"],
        characteristics: "placeholder",
        isRed: null
    },

]

// meal pairing data
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

// wine subtype data
var subTypeData = [
    {
        subType: "Sauvignon Blanc",
        type: "Dry White",
    },
    {
        subType: "Grüner Veltliner",
        type: "Dry White",
    },
    {
        subType: "Pinot Grigio",
        type: "Dry White",
    },
    {
        subType: "Albariño",
        type: "Dry White",
    },
    {
        subType: "Gewürztraminer",
        type: "Sweet White",
    },
    {
        subType: "Müller-Thurgau",
        type: "Sweet White",
    },
    {
        subType: "Malvasia",
        type: "Sweet White",
    },
    {
        subType: "Moscato",
        type: "Sweet White",
    },
    {
        subType: "Riesling",
        type: "Sweet White",
    },
    {
        subType: "Chardonnay",
        type: "Rich White",
    },
    {
        subType: "Roussanne",
        type: "Rich White",
    },
    {
        subType: "Marsanne",
        type: "Rich White",
    },
    {
        subType: "Viognier",
        type: "Rich White",
    },
    {
        subType: "Champagne",
        type: "Sparkling",
    },
    {
        subType: "Prosecco",
        type: "Sparkling",
    },
    {
        subType: "Cava",
        type: "Sparkling",
    },
    {
        subType: "St. Laurent",
        type: "Light Red",
    },
    {
        subType: "Pinot Noir",
        type: "Light Red",
    },
    {
        subType: "Zweigelt",
        type: "Light Red",
    },
    {
        subType: "Gamay",
        type: "Light Red",
    },
    {
        subType: "Tempranillo",
        type: "Medium Red",
    },
    {
        subType: "Sangiovese",
        type: "Medium Red",
    },
    {
        subType: "Zinfandel",
        type: "Medium Red",
    },
    {
        subType: "Grenache",
        type: "Medium Red",
    },
    {
        subType: "Merlot",
        type: "Medium Red",
    },
    {
        subType: "Cabernet Sauvignon",
        type: "Bold Red",
    },
    {
        subType: "Monastrell",
        type: "Bold Red",
    },
    {
        subType: "Aglianico",
        type: "Bold Red",
    },
    {
        subType: "Malbec",
        type: "Bold Red",
    },
    {
        subType: "Syrah",
        type: "Bold Red",
    },
    {
        subType: "Late Harvest",
        type: "Dessert",
    },
    {
        subType: "Ice Wine",
        type: "Dessert",
    },
    {
        subType: "Sherry",
        type: "Dessert",
    },
    {
        subType: "Port",
        type: "Dessert",
    }
]




module.exports = data;