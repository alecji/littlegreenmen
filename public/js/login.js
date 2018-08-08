$("#loginsubmit").on("click", function() {
  var loginObj = {
    username: $("#loginuser_name")
      .val()
      .trim(),
    password: $("#loginpassword")
      .val()
      .trim()
  };
  $.post("/login", loginObj).then(function(data, statusText, jqXHR) {
    if (jqXHR.status === 200) {
      location.replace("/");
    }
  });
});

$("#SUsubmit").on("click", function() {
  var userObj = {
    username: $("#SUuser_name")
      .val()
      .trim(),
    email: $("#SUemail")
      .val()
      .trim(),
    password: $("#SUpassword")
      .val()
      .trim()
  };
  $.post("/signup", userObj);
});
