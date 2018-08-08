//htmljs
$(document).ready(function(){
  $('.modal').modal();
});

// Get references to page elements
var $mealText = $("#meal-input");
var $submitBtn = $("#submit");
var $bookSubmitBtn = $("#book");
// define global variables
var winePairArray = []
var descriptionExtract;
// The API object contains methods for each kind of request we'll make
var API = {
  saveHistory: function (newHistory) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/history",
      data: newHistory
    });
  },
  getPairings: function () {
    return $.ajax({
      url: "api/mealpairs",
      type: "GET",
    });
  },
  getSubTypes: function () {
    return $.ajax({
      url: "api/subtypes",
      type: "GET",
    });
  },
  getNYT: function () {
    return $.ajax({
      url: "http://api.nytimes.com/svc/books/v3/lists?key=e33525e3c9314318878c888c1b3671d0",
      type: "GET",
    });
  }
};

// handleMealSubmit is called whenever we submit a new request
// Find the matching wine in the DB and refresh the page
var handleMealSubmit = function (event) {
  event.preventDefault();

  var mealText = {
    text: $mealText.val().trim(),
  };
  console.log(mealText.text);
  alert(mealText.text + "!");

  if (!(mealText.text)) {
    alert("You must enter a meal!");
    return;
  }

  API.getPairings().then(function (data) {
    // run matching logic
    for (var i = 0; i < data.length; i++)
      if (mealText.text === data[i]["meal"]) {
        winePairArray += data[i]["winePair"];
      }
    console.log(winePairArray)
    var mealString = JSON.stringify(mealText.text)
    var wineString = JSON.stringify(winePairArray)
    // Make a newHistory object
    var newHistory = {
      meal: mealString,
      winePairings: wineString
    }
      ;

    console.log(newHistory)


    $.post("/api/history", newHistory)
      // On success, run the following code
      .then(function () {
        // reset page
        location.reload();
      })
  })
};

// handleBookSubmit is called whenever we submit a new book request
// Find the matching book in the DB and refresh the page
var handleBookSubmit = function (event) {
  event.preventDefault();

  var userSelectedSubType;

  API.getSubTypes().then(function (data) {
    // run matching logic
    for (var i = 0; i < data.length; i++) {
      // match subtype
      if (userSelectedSubType === data[i]["subType"]) {
        // extract description words from data string
        var descriptionExtractString = data[i]["description"]
        // split string to array
        descriptionExtract = descriptionExtractString.split(", ")
      }
    }
    API.getNYT.then(function (data) {

      console.log(winePairArray)
      var mealString = JSON.stringify(mealText.text)
      var wineString = JSON.stringify(winePairArray)
      // Make a newHistory object
      var newHistory = {
        meal: mealString,
        winePairings: wineString
      }
        ;

      console.log(newHistory)


      $.post("/api/history", newHistory)
        // On success, run the following code
        .then(function () {
          // reset page
          location.reload();
        })
    })
  })
};

// Add event listeners to the submit and book buttons
$submitBtn.on("click", handleMealSubmit);
$bookSubmitBtn.on("click", handleBookSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
