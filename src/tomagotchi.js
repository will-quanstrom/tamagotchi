export class Tomagotchi {
  constructor(name,food,toilet,sleep,play,sleepLevel) {
    this.name = name,
    this.food = 10,
    this.toilet = 20,
    this.sleep = false;
    this.hungerInterval;
    this.toiletInterval;
    this.playInterval;
    this.play = 10,
    this.sleepLevel = 30;
  }

  setToilet(){
    this.toiletInterval = setInterval(() => {
      this.toilet--;
    }, 1000);
    if(this.toilet == 0){
      return 'Your tomagotchi pooped!';
    }
  }
  hungryGotchi () {
    if (this.food <= 0) {
      return  true;
    } else {
      return false;
    }
  }

  feedSnack()  {
    this.food += 2;
  }
  feedMeal() {
    this.food += 5;
  }
  sickGotchi (){
    if (this.food >= 11) {
      return "Your tomagotchi is sick: feed medicine";
    }
  }
  feedMedicine() {
    this.food -= 3;
  }
  setHunger() {
    this.hungerInterval =  setInterval(() => {
      this.food--;
    }, 1000);

  }
  sleepGotchi(){
    clearInterval(this.hungerInterval);
    clearInterval(this.toiletInterval);
  }
  setPlay(){
    this.playInterval = setInterval(() => {
      this.play--;
    }, 2000);
  }
  playGotchi(){
    this.play += 4;
  }
  setSleep(){
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }
}
