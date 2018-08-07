
// // All Data
// var allData = [
//     {
//         type: "Dry White",
//         subtypes: ["Sauvignon Blanc", "Grüner Veltliner", "Pinot Grigio", "Albariño"],
//         mealPair: ["Vegetables", "Roasted Vegetables", "Fish"],
//         characteristics: "placeholder",
//         isRed: false
//     },
//     {
//         type: "Sweet White",
//         subtypes: ["Gewürztraminer", "Müller-Thurgau", "Malvasia", "Moscato", "Riesling"],
//         mealPair: ["Sweets"],
//         characteristics: "placeholder",
//         isRed: false
//     },
//     {
//         type: "Rich White",
//         subtypes: ["Chardonnay", "Roussanne", "Marsanne", "Viognier"],
//         mealPair: ["Fish", "Shellfish", "White Meat"],
//         characteristics: "placeholder",
//         isRed: false
//     },
//     {
//         type: "Sparkling",
//         subtypes: ["Champagne", "Prosecco", "Cava"],
//         mealPair: ["Vegtables", "Fish"],
//         characteristics: "placeholder",
//         isRed: false
//     },
//     {
//         type: "Light Red",
//         subtypes: ["St. Laurent", "Pinot Noir", "Zweigelt", "Gamay"],
//         mealPair: ["Roasted Vegetables", "Shellfish", "White Meat"],
//         characteristics: "placeholder",
//         isRed: true
//     },
//     {
//         type: "Medium Red",
//         subtypes: ["Tempranillo", "Sangiovese", "Zinfandel", "Grenache", "Merlot"],
//         mealPair: ["Roasted Vegetables", "White Meat", "Red Meat"],
//         characteristics: "placeholder",
//         isRed: true
//     },
//     {
//         type: "Bold Red",
//         subtypes: ["Cabernet Sauvignon", "Monastrell", "Aglianico", "Malbec", "Syrah"],
//         mealPair: ["Red Meat"],
//         characteristics: "placeholder",
//         isRed: true
//     },
//     {
//         type: "Dessert",
//         subtypes: ["Late Harvest", "Ice Wine", "Sherry", "Port"],
//         mealPair: ["Sweets"],
//         characteristics: "placeholder",
//         isRed: null
//     },

// ]

// // meal pairing data
// var mealData = [
//     {
//         meal: "Vegetables",
//         winePair: "Dry White",
//     },
//     {
//         meal: "Vegetables",
//         winePair: "Sparkling",
//     },
//     {
//         meal: "Roasted Vegetables",
//         winePair: "Dry White"
//     },
//     {
//         meal: "Roasted Vegetables",
//         winePair: "Light Red"
//     },
//     {
//         meal: "Roasted Vegetables",
//         winePair: "Medium Red"
//     },
//     {
//         meal: "Fish",
//         winePair: "Dry White"
//     },
//     {
//         meal: "Fish",
//         winePair: "Rich White"
//     },
//     {
//         meal: "Fish",
//         winePair: "Sparkling"
//     },
//     {
//         meal: "Shellfish",
//         winePair: "Rich White"
//     },
//     {
//         meal: "Shellfish",
//         winePair: "Light Red"
//     },
//     {
//         meal: "White Meat",
//         winePair: "Rich White"
//     },
//     {
//         meal: "White Meat",
//         winePair: "Light Red"
//     },
//     {
//         meal: "White Meat",
//         winePair: "Medium Red"
//     },
//     {
//         meal: "Red Meat",
//         winePair: "Medium Red"
//     },
//     {
//         meal: "Red Meat",
//         winePair: "Bold Red"
//     },
//     {
//         meal: "Sweets",
//         winePair: "Sweet White"
//     },
//     {
//         meal: "Sweets",
//         winePair: "Dessert Wine"
//     }
// ]

// // wine subtype data
// var subTypeData = [
//     {
//         subType: "Sauvignon Blanc",
//         type: "Dry White",
//         description: "bright, crisp, refreshing"
//         country: "France"
//     },
//     {
//         subType: "Grüner Veltliner",
//         type: "Dry White",
//         description: "zesty, heat, summer"
//         country: "Austria"
//     },
//     {
//         subType: "Pinot Grigio",
//         type: "Dry White",
//         description: "pool, summer, fresh"
//         country: "Italy"
//     },
//     {
//         subType: "Albariño",
//         type: "Dry White",
//         description: "dramatic, ocean, sea"
//         country: "Spain"
//     },
//     {
//         subType: "Gewürztraminer",
//         type: "Sweet White",
//         description: "roses, lavish, river"
//         country: "Gernmany"
//     },
//     {
//         subType: "Müller-Thurgau",
//         type: "Sweet White",
//         description: "plain, workers, laborers"
//         country: "Germany"
//     },
//     {
//         subType: "Malvasia",
//         type: "Sweet White",
//         description: "mediterranean, sea, islands"
//         country: "Greece"
//     },
//     {
//         subType: "Moscato",
//         type: "Sweet White",
//         description: "pool, ocean, beach"
//         country: "Italy"
//     },
//     {
//         subType: "Riesling",
//         type: "Sweet White",
//         description: "medieval, estate, villa "
//         country: "Germany"
//     },
//     {
//         subType: "Chardonnay",
//         type: "Rich White",
//         description: "sensual"
//         country:
//     },
//     {
//         subType: "Roussanne",
//         type: "Rich White",
//         description:
//         country:
//     },
//     {
//         subType: "Marsanne",
//         type: "Rich White",
//         description:
//         country:
//     },
//     {
//         subType: "Viognier",
//         type: "Rich White",
//         description:
//         country:
//     },
//     {
//         subType: "Champagne",
//         type: "Sparkling",
//         description:
//         country:
//     },
//     {
//         subType: "Prosecco",
//         type: "Sparkling",
//         description:
//         country:
//     },
//     {
//         subType: "Cava",
//         type: "Sparkling",
//         description:
//         country:
//     },
//     {
//         subType: "St. Laurent",
//         type: "Light Red",
//         description:
//         country:
//     },
//     {
//         subType: "Pinot Noir",
//         type: "Light Red",
//         description:
//         country:
//     },
//     {
//         subType: "Zweigelt",
//         type: "Light Red",
//         description:
//         country:
//     },
//     {
//         subType: "Gamay",
//         type: "Light Red",
//     },
//     {
//         subType: "Tempranillo",
//         type: "Medium Red",
//         description:
//         country:
//     },
//     {
//         subType: "Sangiovese",
//         type: "Medium Red",
//         description:
//         country:
//     },
//     {
//         subType: "Zinfandel",
//         type: "Medium Red",
//         description:
//         country:
//     },
//     {
//         subType: "Grenache",
//         type: "Medium Red",
//         description:
//         country:
//     },
//     {
//         subType: "Merlot",
//         type: "Medium Red",
//         description:
//         country:
//     },
//     {
//         subType: "Cabernet Sauvignon",
//         type: "Bold Red",
//         description:
//         country:
//     },
//     {
//         subType: "Monastrell",
//         type: "Bold Red",
//         description:
//         country:
//     },
//     {
//         subType: "Aglianico",
//         type: "Bold Red",
//         description:
//         country:
//     },
//     {
//         subType: "Malbec",
//         type: "Bold Red",
//         description:
//         country:
//     },
//     {
//         subType: "Syrah",
//         type: "Bold Red",
//         description:
//         country:
//     },
//     {
//         subType: "Late Harvest",
//         type: "Dessert",
//         description:
//         country:
//     },
//     {
//         subType: "Ice Wine",
//         type: "Dessert",
//         description:
//         country:
//     },
//     {
//         subType: "Sherry",
//         type: "Dessert",
//         description:
//         country:
//     },
//     {
//         subType: "Port",
//         type: "Dessert",
//         description:
//         country:
//     }
// ]




// module.exports = data;