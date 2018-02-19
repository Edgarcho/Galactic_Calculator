export class Calculator {
  const planetsYear = [0.241, 0.615, 1.88, 11.86];
  let humanYearForPlanets = [];
  let lifeExpectancy = [];

  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  convert(){
    for (let i = 0; i < planetsYear.length; i += 1){
       let year = this.age/planetsYear[i];
       humanYearForPlanets.push(Math.ceil(year));
    }
    return humanYearForPlanets;
  }
  checkLifeExp(){
    for (let i = 0; i < humanYearForPlanets.length; i += 1){
      if (humanYearForPlanets[i] === 79 ) || (humanYearForPlanets[i] === 86 ) || (humanYearForPlanets[i] === 82 ) || ((humanYearForPlanets[i] === 78 )) {
        lifeExpectancy.push("Surpassed life expectancy");
      }else {
        lifeExpectancy.push("Still below life expectancy");
      }
    }
    return lifeExpectancy;
  }
}
