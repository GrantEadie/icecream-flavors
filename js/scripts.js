$(document).ready(function() {
  // let array0 = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  // let array1 = [];
  // let array2 = [];

  $("#formOne").submit(function(event) {
    // array0.forEach(function(element) {
    //   array1.push( $("input#" + array0[element] + '"').val())
    // }
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    const inputArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    // array1.forEach(function(element) {
    // $("." + array0[element] + '"').text(array1[element]);
    // }

    inputArray.forEach(function(element){
      $("#display-input").append("<li>" + element + "</li>";)
    });

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});