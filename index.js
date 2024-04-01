const { Triangle, Square, Circle } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for inquirer prompts
const questions = [
    {
        type: "list",
        name: "shape",
        message: "Pick the shape of your logo.",
        choices: ["triangle", "square", "circle"]
    },
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters for your acronym."
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter your desired text color in plain text or hexadecimal format."
    },
    {
        type: "input",
        name: "fillColor",
        message: "Enter your logo's fill color in plain text or hexadecimal format"
    }
];

// Function to write the data to a file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Success! Your logo has been generated.");
        }
    });
}

// Function to generate the SVG based on user input
function genSVG(answers) {
    // Destructure answers object
    const { shape, text, textColor, fillColor } = answers;

    // Object mapping shape names to shape classes
    const shapeChoices = {
        triangle: Triangle,
        square: Square,
        circle: Circle
    };

    // Get the chosen shape class based on user input
    const chosenShape = shapeChoices[shape];

    // Instantiate the chosen shape class with provided parameters
    const logoShape = new chosenShape(text, textColor, fillColor);

    // Generate SVG markup using the render method of the instantiated shape object
    const svg = `<svg width='300' height='200'>\n  ${logoShape.render()}\n</svg>`;

    writeToFile("./exp/logo.svg", svg);
}

// Function to initialize the app
function init() {
    // Prompt user with the questions defined above
     
    inquirer.prompt(questions)
        .then((answers) => {
            // Call genSVG function with user's answers
            genSVG(answers);
        })
        .catch((error) => {
            // Handle errors
            console.error(error);
        });
}

// Call the init function to start the application
init();
