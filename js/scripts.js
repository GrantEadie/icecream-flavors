$(document).ready(function() {
  let flavors = ["chocolate", "vanilla", "cookie dough", "olives"];

  flavors.forEach(function(flavor) {
    $("#icecream").append("<li>" + flavor + "</li>");
  });
});