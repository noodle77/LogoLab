const {Triangle, Square, Circle} = require("./shapes.js")

describe("Triangle", () => {
    test("Generates triangle logo with correct text, text color, and fill color.", () => {
        const triangle = new Triangle("", "", "");
        const genSVG = triangle.render();

        expect(genSVG).toEqual("");
    });
});

describe("Square", () => {
    test("Generates square logo with correct text, text color, and fill color.", () => {
        const square = new Square("", "", "");
        const genSVG = square.render();

        expect(genSVG).toEqual("");
    });
});

describe("Circle", () => {
    test("Generates circle logo with correct text, text color, and fill color.", () => {
        const circle = new Circle("", "", "");
        const genSVG = circle.render();

        expect(genSVG).toEqual("");
    });
});

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');