import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $("#yearForm").submit(function(event) {
    event.preventDefault();
    const planetsName = ["Mercury","Venus","Mars","Jupiter"];
    let userAge = parseInt($("#age").val());
    let userlifeExp = $("#lifeExp").val();
    let userResult = new Calculator(userAge);
    let finalResult= userResult.convert();
    console.log(userAge);
    console.log(userlifeExp);
    for(let i = 0; i < finalResult.length; i+=1){
      $('#result').append("<tr><td>"${finalResult[i]}<td></tr>");
    }
  });
});
