describe('Calculator', function(){
  it('should test whether calculator has created new calculator instance', function(){
    var userAge = new Calculator(25);
    expect(userAge.years).toEqual(25);
  });
});
