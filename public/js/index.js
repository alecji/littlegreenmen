// Get references to page elements
var $mealText = $("#meal-input");
var $submitBtn = $("#submit");
var $bookSubmitBtn = $("#book");
// define global variables
var winePairArray = []
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
    .then(function() { 
      // reset page
    location.reload();  
    })
  })
};

// handleBookSubmit is called whenever we submit a new book request
// Find the matching book in the DB and refresh the page
// var handleBookSubmit = function (event) {
//   event.preventDefault();

//   API.getSubTypes().then(function (data) {
//     // run matching logic
//     for (var i = 0; i < data.length; i++)
//       if (mealText.text === data[i]["meal"]) {
//         winePairArray += data[i]["winePair"];
//       }
//     console.log(winePairArray)
//       var mealString = JSON.stringify(mealText.text)
//       var wineString = JSON.stringify(winePairArray)
//     // Make a newHistory object
//     var newHistory = {
//       meal: mealString,
//       winePairings: wineString
//     }
//     ;

//     console.log(newHistory)


//     $.post("/api/history", newHistory)
//     // On success, run the following code
//     .then(function() { 
//       // reset page
//     location.reload();  
//     })
//   })
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and book buttons
$submitBtn.on("click", handleMealSubmit);
$bookSubmitBtn.on("click", handleBookSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
