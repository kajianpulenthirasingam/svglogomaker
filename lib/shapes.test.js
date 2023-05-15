const Shape = require('./shapes.js');
const { Circle, Triangle, Square } = require('./shapes.js');

describe("Circle test", () => {
    test("test for a circle with a red background", () => {
        const myCircle = new Circle();
        myCircle.setColor('red');
        console.log(myCircle.render()); // should log "<circle cx="150" cy="100" r="100" fill="red" />"
        expect(myCircle.render()).toEqual(
        '<circle cx="150" cy="100" r="100" fill="red" />'
      );
    });
  });
  
  describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
        const myTriangle = new Triangle();
        myTriangle.setColor('blue');
        console.log(myTriangle.render()); // should log "<polygon points="150, 18 244, 182 56, 182" fill="blue" />"
        expect(myTriangle.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  
  describe("Square test", () => {
    test("test for a square with a green background", () => {
        const mySquare = new Square();
        mySquare.setColor('green');
        expect(mySquare.render()).toEqual( // should log '<rect x="50" y="0" width="200" height="200" fill="green" />'
        '<rect x="50" y="0" width="200" height="200" fill="green" />'
      );
    });
  });