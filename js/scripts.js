$(document).ready(function() {
  let array0 = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

  let userInput;

  $("#formOne").submit(function(event) {
    array0.forEach(function(element) {
      userInput = $("input#" + element).val();
      $("." + element).text(userInput);
    });
    
    $("#story").show();

    event.preventDefault();
  });
});