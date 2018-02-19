import { Calculator } from './../js/calculator.js';

describe('Calculator', function(){
  it('should test whether calculator has created new calculator instance', function(){
    let userAge = new Calculator(25, 79);
    expect(userAge.age).toEqual(25);
    expect(userAge.lifeExp).toEqual(79);
  });
  it('should test whether calculator has converted age into Mercury, Venus, Mars and Jupiter years', function(){
    let userAge = new Calculator(25, 79);
    expect(userAge.convert()).toEqual([104,41,14,3]);
  });

  it('should test whether calculator has check if you have surpassed the average life expectancy on each planet', function(){
    let userAge = new Calculator(25, 79);
    expect(userAge.checkLifeExp()).toEqual(["Surpassed life expectancy","Still below life expectancy","Still below life expectancy","Still below life expectancy"]);
  })
});
