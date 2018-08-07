//htmljs
$(document).ready(function(){
  $('.modal').modal();
});

// Get references to page elements
var $mealText = $("#meal-input");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
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
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
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

    // var pairings = data.map(function(pairing) {
    //   console.log(pairing.meal) })
    // console.log(pairings)
  })
};

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

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleMealSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
