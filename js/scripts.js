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


// this also functions -- keep in mind that forEach is the same as the num++ idea

      //let array1 = [];
      //let i = 0;
      //array1.push($("input#" + element).val());
      //$("." + element).text(array1[i]);
      //i++