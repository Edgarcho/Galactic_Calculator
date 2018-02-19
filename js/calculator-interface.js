import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $("#yearForm").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#age").val());
    let userlifeExp = parseInt($("#lifeExp").val());
    let userResult = new Calculator(userAge, userlifeExp);
    let finalResult= userResult.convert();
    let lifeExpResult= userResult.checkLifeExp();
    $("#result .planet1").text(finalResult[0]);
    $("#result .lifeExp1").text(lifeExpResult[0]);
    $("#result .planet2").text(finalResult[1]);
    $("#result .lifeExp2").text(lifeExpResult[1]);
    $("#result .planet3").text(finalResult[2]);
    $("#result .lifeExp3").text(lifeExpResult[2]);
    $("#result .planet4").text(finalResult[3]);
    $("#result .lifeExp4").text(lifeExpResult[3]);
  });
});
