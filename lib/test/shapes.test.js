import {Triangle, Square, Circle} from "../shapes.js";

describe("Triangle", () => {
    test("Generates triangle logo with correct text, text color, and fill color.", () => {
        const triangle = new Triangle("ABC", "AFE1AF", "097969");
        const genSVG = triangle.render();

        expect(genSVG).toContain("<polygon points='150,50 200,150 100,150' fill='097969' />\n");
        expect(genSVG).toContain("<text x='150' y='140' text-anchor='middle' fill='AFE1AF' font-size='33'>ABC</text>");
    });
});

describe("Square", () => {
    test("Generates square logo with correct text, text color, and fill color.", () => {
        const square = new Square("ABC", "AFE1AF", "097969");
        const genSVG = square.render();

        expect(genSVG).toContain("<rect x='50' y='0' width='200' height='200' fill='097969' />\n");
        expect(genSVG).toContain("<text x='150' y='115' text-anchor='middle' fill='AFE1AF' font-size='50'>ABC</text>");
    });
});

describe("Circle", () => {
    test("Generates circle logo with correct text, text color, and fill color.", () => {
        const circle = new Circle("ABC", "AFE1AF", "097969");
        const genSVG = circle.render();

        expect(genSVG).toContain("<circle cx='150' cy='100' r='80' fill='097969' />\n");
        expect(genSVG).toContain("<text x='150' y='105' text-anchor='middle' alignment-baseline='middle' fill='AFE1AF' font-size='50'>ABC</text>");
    });
});