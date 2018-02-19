var Calculator = require('./../js/calculator.js').calculatorModule;

describe('Calculator', function(){
  it('should test whether calculator has created new calculator instance', function(){
    var userAge = new Calculator(25);
    expect(userAge.age).toEqual(25);
  });
});
