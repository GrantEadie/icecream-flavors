$(document).ready(function() {
  let array0 = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  let array1 = [];
  let phrase;



  $("#formOne").submit(function(event) {
    array0.forEach(function(element) {
      array1.push($("input#" + element).val());
    });
    
    let num = 0;

    array0.forEach(function(element) {
      $("." + element).text(array1[num]);
      num++;
    });

    



  //   array0.forEach(function(element) {
  //     phrase = $('"input#' + element + '"').val();
  //     alert(phrase);
  //     array1.push(phrase);
  //   });

    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();// 
    // array1.forEach(function(element) {
    //   phrase = '$(".' + array0[element] + '").text(array1[element])'
    //   alert(phrase);
    //   $("." + array0[element] + '"').text(element);
    // });
    // // // 

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