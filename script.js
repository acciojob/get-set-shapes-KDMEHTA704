//complete this code
class Rectangle {
  class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers.");
        }
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }}

class Square extends Animal {
	constructor(side) {
        if (side <= 0) {
            throw new Error("Side must be a positive integer.");
        }
        super(side, side); 
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
