var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.MealPair.findAll({}).then(function(dbMealPairs) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbMealPairs
      });
    });
  });
  
  // Load results page and display latest match
  app.get("/results", function(req, res) {
    // Find most recent history
    db.History.findAll({
      limit: 1,
      order: [ [ 'createdAt', 'DESC']]
    }).then(function(dbHistoryPairs) {
      res.render("results", {
        winePairs: dbHistoryPairs
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
