// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const element of dairy) {
        console.log(element);
    }
}

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  const birdEntries = Object.entries(bird);
  for (const [property, value] of birdEntries) {
    console.log(`${property}: ${value}`);
  }
}
// Task 3

function animalCan() {
  for (const property in bird) {
    if (bird.hasOwnProperty(property)) {
      console.log(`${property}: ${bird[property]}`);
    }
  }
  for (const property in animal) {
    if (animal.hasOwnProperty(property)) {
      console.log(`${property}: ${animal[property]}`);
    }
  }
}