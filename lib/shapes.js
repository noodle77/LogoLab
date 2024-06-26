class Shape {
    constructor (text, textColor, fillColor) {
        if (typeof text === 'undefined' || text === null || text === '' ||
            typeof textColor === 'undefined' || textColor === null || textColor === '' ||
            typeof fillColor === 'undefined' || fillColor === null || fillColor === '') {
                throw new Error('Arguments are incorrectly typed!');
        } else {
            this.text = text;
            this.textColor = textColor;
            this.fillColor = fillColor;
        };
    };
};

export class Triangle extends Shape {
    constructor (text, textColor, fillColor) {
        if (!text || !textColor || !fillColor) {
            throw new Error("Missing arguments!")
        } else {
            super(text.substring(0, 3), textColor, fillColor);
        };
    };

    render () {
        return `<polygon points='150,50 200,150 100,150' fill='${this.fillColor}' />\n` +
               `<text x='150' y='140' text-anchor='middle' fill='${this.textColor}' font-size='33'>${this.text}</text>`;
    };
};

export class Square extends Shape {
    constructor (text, textColor, fillColor) {
        if (!text || !textColor || !fillColor) {
            throw new Error("Missing arguments!")
        } else {
            super(text.substring(0, 3), textColor, fillColor);
        };
    };

    render () {
        return `<rect x='50' y='0' width='200' height='200' fill='${this.fillColor}' />\n` +
               `<text x='150' y='115' text-anchor='middle' fill='${this.textColor}' font-size='50'>${this.text}</text>`;
    };
};    

export class Circle extends Shape {
    constructor (text, textColor, fillColor) {
        if (!text || !textColor || !fillColor) {
            throw new Error("Missing arguments!")
        } else {
            super(text.substring(0, 3), textColor, fillColor);
        };
    };

    render () {
        return `<circle cx='150' cy='100' r='80' fill='${this.fillColor}' />\n` +
               `<text x='150' y='105' text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}' font-size='50'>${this.text}</text>`;
    };
};