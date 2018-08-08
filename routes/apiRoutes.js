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

  // Create a new history entry
  app.post("/api/history", function (req, res) {
    console.log("!!!!!!!!!! " + req);
    // helper function to extract letters only ??
    db.History.create({
      meal: req.body.meal,
      winePairings: req.body.winePairings
    }).then(function (dbHistory) {
      res.json(dbHistory);
    });
  });

  // PUT route for updating posts
  app.put("/api/history", function (req, res) {
    db.History.update(req.body,
      {
        wineSubType: req.body.wineSubType,
        bookSuggestion: req.body.bookSuggestion,
        // where the id matches the most recent history id        
        where: {
          id: req.body.historyId
        }
      })
      .then(function (dbHistory) {
        res.json(dbHistory);
      });
  });
};
