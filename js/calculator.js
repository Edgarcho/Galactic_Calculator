const planetsYear = [0.241, 0.615, 1.88, 11.86];

export class Calculator {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  convert(){
    let humanYearForPlanets = [];
    for (let i = 0; i < planetsYear.length; i += 1){
       let year = this.age/planetsYear[i];
       humanYearForPlanets.push(Math.ceil(year));
    }
    return humanYearForPlanets;
  }

  checkLifeExp(){
    let lifeExpectancy = [];
    let humanYearForPlanets = [];
    for (let i = 0; i< planetsYear.length; i += 1){
      let year = this.age/planetsYear[i];
      humanYearForPlanets.push(Math.ceil(year));
    }
    debugger;
    for (let j = 0; j < humanYearForPlanets.length; j += 1){
      if(humanYearForPlanets[j] >= this.lifeExp){
        lifeExpectancy.push("Surpassed life expectancy");
      }else {
        lifeExpectancy.push("Still below life expectancy");
      }
    }
    return lifeExpectancy;
  }
}
