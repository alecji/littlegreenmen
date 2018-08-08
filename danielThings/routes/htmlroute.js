// This middleware will check if user"s cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// module.exports = function (app) {

// app.use(function(req, res, next) {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie("user_sid");
//     }
//     next();
// });

// // middleware function to check for logged-in users
// var sessionChecker = function(req, res, next) {
//     if (req.session.user && req.cookies.user_sid) {
//         res.redirect("/dashboard");
//     } else {
//         next();
//     }
// };

// // route for Home-Page
// app.get("/", sessionChecker, function(req, res) {
//     res.redirect("/login");
// });

// // route for user signup
// app.route("/signup")
//     .get(sessionChecker, function(req, res) {
//         res.sendFile(__dirname + "../public/signup");
//     })
//     .post(function(req, res) {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })
//         .then(user => {
//             req.session.user = user.dataValues;
//             res.redirect("/dashboard");
//         })
//         .catch(error => {
//             res.redirect("/signup");
//         });
//     });

// // route for user Login
// app.route("/login")
//     .get(sessionChecker, function(req, res) {
//         res.sendFile(__dirname + "./public/login.html");
//     })
//     .post(function(req, res) {
//         var username = req.body.username,
//             password = req.body.password;

//         User.findOne({ where: { username: username } }).then(function (user) {
//             console.log("user: " + user)
//             if (!user) {
//                 res.redirect("/login");
//             } else if (!user.validPassword(password)) {
//                 res.redirect("/login");
//             } else {
//                 req.session.user = user.dataValues;
//                 res.redirect("/dashboard");
//             }
//         });
//     });
//     // (!user.validPassword(password))
//     // (!password || password != user.validPassword(password)

// // route for user"s dashboard
// app.get("/dashboard", function(req, res) {
//     if (req.session.user && req.cookies.user_sid) {
//         res.sendFile(__dirname + "/public/dashboard.html");
//     } else {
//         res.redirect("/login");
//     }
// });

// // route for user logout
// app.get("/logout", function(req, res) {
//     if (req.session.user && req.cookies.user_sid) {
//         res.clearCookie("user_sid");
//         res.redirect("/");
//     } else {
//         res.redirect("/login");
//     }
// });

// // route for handling 404 requests(unavailable routes)
// app.use(function (req, res, next) {
//   res.status(404).send("Sorry can't find that!")
// });
// }
