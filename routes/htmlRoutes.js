var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.MealPair.findAll({}).then(function(dbMealPairs) {
      res.render("index");
    });
  });
  
  app.get("/login", function(req,res) {
    res.render("login")
  })

  app.get("/signup", function(req,res) {
    res.render("signup")
  })

  // Load results page and display latest match
  app.get("/search", function(req, res) {
    // Find most recent history
    db.History.findAll({
      raw: true,
      attributes: ["meal", "winePairings", "wineSubType", "bookSuggestion"],
      limit: 1,
      order: [ [ 'createdAt', 'DESC']]
    }).then(function(dbHistoryPairs) {
      console.log("dbHistoryPairs: " + dbHistoryPairs) ;
      var rawHistoryPairs = dbHistoryPairs[0] ;
      console.log("RawhistoryPairs: " + rawHistoryPairs);
      res.render("search", {
        historyObject: rawHistoryPairs
      });
    });
  });

  // RESULTS PAGE JUST FOR MY TESTING - Kyle
  app.get("/results", function(req, res) {
    // Find most recent history
    db.History.findAll({
      raw: true,
      attributes: ["meal", "winePairings", "wineSubType", "bookSuggestion"],
      limit: 1,
      order: [ [ 'createdAt', 'DESC']]
    }).then(function(dbHistoryPairs) {
      console.log("dbHistoryPairs: " + dbHistoryPairs) ;
      var rawHistoryPairs = dbHistoryPairs[0] ;
      console.log("RawhistoryPairs: " + rawHistoryPairs);
      res.render("results", {
        historyObject: rawHistoryPairs
      });
    });
  });
  // END RESULTS PAGE JUST FOR MY TESTING - Kyle

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
