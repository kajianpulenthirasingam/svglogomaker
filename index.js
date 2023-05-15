const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: function (value) {
        if (value.length > 3) {
          return 'Please enter up to three characters.';
        } else {
          return true;
        }
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ])
  .then((answers) => {
    // Generate the SVG file based on the user's inputs
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
    shape.setColor(answers.shapeColor);
    const svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                  ${shape.render()}
                  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
                </svg>`;

    // Write the SVG file to disk
    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });