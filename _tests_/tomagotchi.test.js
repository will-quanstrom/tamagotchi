import { Tomagotchi } from './../src/tomagotchi.js';


describe('Toma', () => {
  jest.useFakeTimers();
  let toma;


  beforeEach(function () {
    toma = new Tomagotchi ("toma");
    toma.setHunger();
    toma.setToilet();
    toma.setPlay();
    // toma.sleepGotchi();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

test('should have made a name and a food level of 10 when it is created', () => {
  expect(toma.name).toEqual("toma");
  expect(toma.food).toEqual(10);
});

test('should have a food level of 0 when 10 seconds pass', () => {
  jest.advanceTimersByTime(10001);
  expect(toma.food).toEqual(0);
});
test('should have toilet level of 5 with 10 seconds pass', () => {
  jest.advanceTimersByTime(10000);
  expect(toma.toilet).toEqual(10);
});
test('should have tomagotchi poop after 20 seconds', () => {
  jest.advanceTimersByTime(20001);
  expect(toma.setToilet()).toEqual('Your tomagotchi pooped!');
});
test ('should have tomagotchi be hungry after 10 seconds', () => {
  jest.advanceTimersByTime(10001);
  expect(toma.hungryGotchi()).toEqual(true);
});
test ('should have tomagotchi increase food level by 2 when fed snack', () => {
  toma.feedSnack();
  toma.feedMeal();
  expect(toma.sickGotchi()).toEqual('Your tomagotchi is sick: feed medicine');
});

test ('should have tomagotchi decrease food level by 3 when fed medicine', () => {
  toma.feedMedicine();
  expect(toma.food).toEqual(7);
});
test ('should have tomagotchi food counter stop when sleeping', () => {
  jest.advanceTimersByTime(3000);
  toma.sleepGotchi();
  toma.setHunger();
  toma.setToilet();
  jest.advanceTimersByTime(2000);
  expect(toma.food).toEqual(5);
  expect(toma.toilet).toEqual(15);
  jest.advanceTimersByTime(15001);
  expect(toma.setToilet()).toEqual('Your tomagotchi pooped!');
  });
test('should have tomagotchi play level lower to 7 before being played with and raising back up to 11', () => {
  jest.advanceTimersByTime(6000);
  expect(toma.play).toEqual(7);
  toma.playGotchi();
  expect(toma.play).toEqual(11);
});
});
