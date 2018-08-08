//htmljs

$(document).ready(function(){
  $('.modal').modal();
  $('select').formSelect()
});


// Get references to page elements
var $mealText = $("#meal-input");
var $submitBtn = $("#submit");
var $bookSubmitBtn = $("#bookSubmit");
// define global variables
var winePairArray = []
var descriptionExtract;
var bookOutput = [];
var bookTitle = [];
var descriptionExtractString;
var historyId;
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
  // method to update history
  updateHistory: function (putHistory) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/history",
      data: putHistory
    });
  },
  getHistory: function () {
    return $.ajax({
      url: "api/history",
      type: "GET",
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
      url: "http://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=e33525e3c9314318878c888c1b3671d0",
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
      winePairings: wineString,
    };
    console.log(newHistory);
    $.post("/api/history", newHistory)
      // On success, run the following code
      .then(function (result) {
        console.log(result);
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
  // STAND IN FOR TESTING
  userSelectedSubType = "Grüner Veltliner"

  console.log(userSelectedSubType);

  API.getSubTypes().then(function (data) {
    // run matching logic
    for (var i = 0; i < data.length; i++) {
      // match subtype
      if (userSelectedSubType === data[i]["subType"]) {
        // extract description words from data string
        descriptionExtractString = data[i]["description"]
        // split string to array
        descriptionExtract = descriptionExtractString.split(", ")
      }
    }
    // for later query url manipulation
    var queryURL;
    // get NYT data for matching
    API.getNYT().then(function (data) {
      // for all books returned
      for (var j = 0; j < data.results.lists[0].books.length; j++) {
        // store the specific description and lowercase
        var descriptionLower = data.results.lists[0].books[j]["description"].toLowerCase();
        bookTitle = data.results.lists[0].books[j]["title"];
        // for all wine descriptions extract 
        for (var k = 0; k < descriptionExtract.length; k++) {
          // if wine description matches a word in the book description
          console.log(descriptionExtract[k])
          if (descriptionLower.includes(descriptionExtract[k])) {
            // push to matches array
            bookOutput.push(bookTitle);
          }
        }
      }
      // Randomly pick from the bookOutput array
      var randomBookMatch = JSON.stringify(bookOutput[Math.floor(Math.random() * bookOutput.length)]);
      // Make a newHistory object
      console.log(randomBookMatch);
      // Get most recent history id
      API.getHistory().then(function (data) {
        var historyLength = data.length - 1;
        // get the ID of the most recent history entry and parse
        historyIdNum = data[historyLength]["id"]
        historyId = historyIdNum.toString();
        idString = JSON.stringify(historyId);
        userSelectedSubType = JSON.stringify(userSelectedSubType);
        var putHistory = {
          // send the wine subtype
          wineSubType: userSelectedSubType,
          // send the book title
          bookSuggestion: randomBookMatch,
          // send the previous history ID
          recentId: idString
        };
        // putHistory = JSON.stringify(putHistory);
        console.log(putHistory);
        // // putHistory = JSON.stringify(putHistory)
        // putHistory = jQuery.parseJSON(JSON.stringify(putHistory));
        $.post("/api/history", putHistory)
        // On success, run the following code
        .then(function (result) {
          // console.log(result);
          // reset page
          location.reload();
        });
      });
    });
  });
};

// Add event listeners to the submit and book buttons
$submitBtn.on("click", handleMealSubmit);


$("select[name='foodDropdown']").change(function () {


// $exampleList.on("click", ".delete", handleDeleteBtnClick);
