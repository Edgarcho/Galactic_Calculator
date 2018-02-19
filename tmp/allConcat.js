import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $("#yearForm").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#age").val());
    let userlifeExp = parseInt($("#lifeExp").val());
    let userResult = new Calculator(userAge, userlifeExp);
    $("#result").append("<ul><li></li></ul>");
  })
})
