// Dropdown form Initialization

$(document).ready(function () {
  $('select').formSelect()
});

//Red Wines
var lightRed = $("<div class='col s3'><a class='waves-effect waves-light btn'>Light Red</a></div>");
var mediumRed = $("<div class='col s3'> <a class='waves-effect waves-light btn'>Medium Red</a></div >");
var boldRed = $("<div class='col s3'><a class='waves-effect waves-light btn'>Bold Red</a></div>");
var dessert = $("<div class='col s3'><a class='waves-effect waves-light btn'>Dessert</a></div>");

//White Wines
var dryWhite = $("<div class='col s3'><a class='waves-effect waves-light btn'>Dry White</a></div>");
var sweetWhite = $("<div class='col s3'> <a class='waves-effect waves-light btn'>Sweet White</a></div >");
var richWhite = $("<div class='col s3'><a class='waves-effect waves-light btn'>Rich White</a></div>");
var sparkling = $("<div class='col s3'><a class='waves-effect waves-light btn'>Sparkling</a></div>");

$("select[name='foodDropdown']").change(function () {
  if ($(this).val() === "Red Meat") {
    console.log("Red Meat subtype");
    $(".mainWines").empty();
    $(".mainWines").append(mediumRed);
    $(".mainWines").append(boldRed);


  } else if ($(this).val() === "White Meat") {
    console.log("White Meat subtype");
    $(".mainWines").empty();
    $(".mainWines").append(richWhite);
    $(".mainWines").append(lightRed);
    $(".mainWines").append(mediumRed);

  } else if ($(this).val() === "Fish") {
    console.log("Fish subtype");

  } else if ($(this).val() === "Vegetables") {
    console.log("Vegetables sub type");

  } else if ($(this).val() === "Roasted Vegetables") {
    console.log("Roasted Vegetables sub type");

  } else if ($(this).val() === "Shellfish") {
    console.log("Shellfish sub type");

  } else if ($(this).val() === "Sweets") {
    console.log("Sweets sub type");
  }

});

//  $("#redBtn").on("click", function () {
//   var newBtn = ("<button>");



// //When user clicks on dropdown menu
// $(".input-field").on("click", function () {
//   $(".mainWines").empty();

//     //Renders red button
//   var redBtn = $("<div class='col s6'><a class='waves-effect waves-light btn-large' id='redBtn'>Red</a></div>");
//   $(".mainWines").append(redBtn);

//   //Renders white button
//   var whiteBtn = $("<div class='col s6'><a class='waves-effect waves-light btn-large' id='whiteBtn'>White</a></div>");
//   $(".mainWines").append(whiteBtn);

//   //Red wine populates on click
//   $("#redBtn").on("click", function () {
//     $(".subWines").empty();
//     $(".subWines").append(lightRed);
//     $(".subWines").append(mediumRed);
//     $(".subWines").append(boldRed);
//     $(".subWines").append(dessert);
//   });

//   //White wine populates on click
//   $("#whiteBtn").on("click", function () {
//     $(".subWines").empty();
//     $(".subWines").append(dryWhite);
//     $(".subWines").append(sweetWhite);
//     $(".subWines").append(richWhite);
//     $(".subWines").append(sparkling);
//   });
// });

// ******

// $(".input-field").on("click", function () {
//   var whiteBtn = $("<div class='col s6'><a class='waves-effect waves-light btn-large' id='whiteBtn'>White</a></div>");
//   $(".mainWines").append(whiteBtn);

//   //White wine populates on click
//   $("#whiteBtn").on("click", function () {
//     $(".subWines").empty();
//     $(".subWines").append(dryWhite);
//     $(".subWines").append(sweetWhite);
//     $(".subWines").append(richWhite);
//     $(".subWines").append(sparkling);
//   });
// });


// //Red wine populates on click
// $("#redBtn").on("click", function () {
//   $(".subWines").empty();
//   $(".subWines").append(lightRed);
//   $(".subWines").append(mediumRed);
//   $(".subWines").append(boldRed);
//   $(".subWines").append(dessert);
// });

// //White wine populates on click
// $("#whiteBtn").on("click", function () {
//   $(".subWines").empty();
//   $(".subWines").append(dryWhite);
//   $(".subWines").append(sweetWhite);
//   $(".subWines").append(richWhite);
//   $(".subWines").append(sparkling);
// });

//Jack's code ************************

// //first button render
// $("#dropdown").("select[]", function() {
//   for (var i=0; i < winePairArray.length; i++) {
//     var button = $("<button class='firstbutton'></button>") 
//     $("#firstbuttondiv").append(button)

//   }
// })

// //2nd button render
// $(".firstbutton").on("click", function() {
//   var FBtext = $(this).val().trim();
//   //insert logic before here to call to subcategory model for subcategories; results come back as subArray, just going to name it below so don't throw errors

// })


