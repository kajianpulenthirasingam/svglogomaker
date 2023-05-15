const Shape = require('./shapes.js');
const { Circle, Triangle, Square } = require('./shapes.js');

const myCircle = new Circle();
myCircle.setColor('red');
console.log(myCircle.render()); // should log "<circle cx="150" cy="115" r="80" fill="red" />"

const myTriangle = new Triangle();
myTriangle.setColor('blue');
console.log(myTriangle.render()); // should log "<polygon points="150, 18 244, 182 56, 182" fill="blue" />"

const mySquare = new Square();
mySquare.setColor('green');
console.log(mySquare.render()); // should log "<rect x="73" y="40" width="160" height="160" fill="green" />"