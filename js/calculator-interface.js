import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $("#yearForm").submit(function(event) {
    event.preventDefault();
    const planetsName = ["Mercury","Venus","Mars","Jupiter"];
    let userAge = parseInt($("#age").val());
    let userlifeExp = parseInt($("#lifeExp").val());
    let userResult = new Calculator(userAge);
    let finalResult= userResult.convert();
    console.log(finalResult);
    console.log(planetsName);
    for(let i = 0; i < finalResult.length; i+=1){
      $('#result').append("<tr><td>finalResult[i]<td></tr>");
    }
  });
});
