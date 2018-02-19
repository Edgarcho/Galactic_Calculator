import { Calculator } from './../js/calculator.js';

describe('Calculator', function(){
  it('should test whether calculator has created new calculator instance', function(){
    let userAge = new Calculator(25);
    expect(userAge.age).toEqual(25);
  });
  it('should test whether calculator has converted age into mercury years', function(){
    let userAge = new Calculator(25);
    console.log(userAge.convert());
    expect(userAge.convert()).toEqual(104);
  });
});
