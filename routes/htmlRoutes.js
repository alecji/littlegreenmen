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
=======
module.exports = function (app) {
	// middleware function to check for logged-in users
	// var sessionChecker = function (req, res, next) {
	// 	if (req.session.user && req.cookies.user_sid) {
	// 		res.render("search");
	// 	} else {
	// 		next();
	// 	}
	// };

	// Load index page
	app.get("/", function (req, res) {
		res.render("index");
	});

	app.route("/signup")
		.get( function (req, res) {
			res.render("signup")
		})
		.post(function (req, res) {
			console.log(req.body)
			db.Users.create({
				username: req.body.username,
				email: req.body.email,
				password: req.body.password
			})
				.then(user => {
					console.log(res.body)
					req.session.user = user.dataValues;
					res.redirect("login");
				})
				.catch(error => {
					res.render("signup");
				});
		})

	app.route("/login")
		.get( function (req, res) {
			res.render("login");
		})
		.post(function (req, res) {
			var username = req.body.username,
				password = req.body.password;
			db.User.findOne({
				where: { username: username }
			})
			.then(function (user) {
				console.log("user: " + user)
				if (!user) {
					res.render("login")
					console.log("Login Failed")
				} else if (!user.validPassword(password)) {
					res.render("login")
					console.log("Login Failed")
				} else {
					req.session.user = user.dataValues;
					res.render("search")
				}
			});
		});

	app.get("/history", function (req, res) {
		if (req.session.user && req.cookies.user_sid) {
			res.render("dashboard");
		} else {
			res.render("search");
		}
	});

	//
	// Load results page and display latest match
	app.get("/search", function (req, res) {
		// Find most recent history
		db.History.findAll({
			raw: true,
			attributes: ["meal", "winePairings"],
			limit: 1,
			order: [['createdAt', 'DESC']]
		}).then(function (dbHistoryPairs) {
			console.log("dbHistoryPairs: " + dbHistoryPairs);
			var rawHistoryPairs = dbHistoryPairs[0];
			console.log("RawhistoryPairs: " + rawHistoryPairs);
			res.render("search", {
				historyObject: rawHistoryPairs
			});
		});
	});

	// Load example page and pass in an example by id
	app.get("/example/:id", function (req, res) {
		db.Example.findOne({ where: { id: req.params.id } }).then(function (
			dbExample
		) {
			res.render("example", {
				example: dbExample
			});
		});
	});

	// Render 404 page for any unmatched routes
	app.get("*", function (req, res) {
		res.render("404");
	});



};
