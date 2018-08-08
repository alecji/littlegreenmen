var db = require("../models");

module.exports = function (app) {
    // Get all meal pairs
    app.get("/api/mealpairs", function (req, res) {
        db.MealPair.findAll({}).then(function (dbMealPair) {
            res.json(dbMealPair);
        });
    });

    // Get all wine subtypes
    app.get("/api/subtypes", function (req, res) {
        db.SubType.findAll({}).then(function (dbSubType) {
            res.json(dbSubType);
        });
    });

    // Get most recent history
    app.get("/api/history", function (req, res) {
        db.History.findAll({}).then(function (dbHistory) {
            res.json(dbHistory);
        });
    });

    // Create a new history entry or update most recent one
    app.post("/api/history", function (req, res) {
        // console.log("body: %j", req.body)
        if (req.body.bookSuggestion) {
            db.History.update(
                {
                    wineSubType: JSON.parse(req.body.wineSubType),
                    bookSuggestion: JSON.parse(req.body.bookSuggestion)
                },
                {
                    // where the id matches the most recent history id
                    where: {
                        id: JSON.parse(req.body.recentId)
                    }
                })
                .then(function (dbHistory) {
                    // console.log(dbHistory + " @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
                    res.json(dbHistory);
                });
        }
        // console.log("!!!!!!!!!! " + req.values);
        // helper function to extract letters only ??
        else {
            db.History.create({
                meal: req.body.meal,
                winePairings: req.body.winePairings,
                winePairingsSubtypes: req.body.winePairingsSubtypes
            }).then(function (dbHistory) {
                res.json(dbHistory);
            });
        }
    });

    // // PUT route for updating posts
    // app.put("/api/history", function (req, res) {
    //   console.log(req + "!*!*!*!*!*!")
    //   db.History.update({
    //     // where the id matches the most recent history id
    //     where: {
    //       id: req.body.id
    //     },
    //     wineSubType: req.body.wineSubType,
    //     bookSuggestion: req.body.bookSuggestion,
    //   })
    //     .then(function (dbHistory) {
    //       res.json(dbHistory);
    //     });
    // });
};
