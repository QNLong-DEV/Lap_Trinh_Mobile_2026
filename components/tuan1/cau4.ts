class Rectangle {
    constructor(public width: number, public height: number) { }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log(`Diện tích: ${rect.calculateArea()}`);
console.log(`Chu vi: ${rect.calculatePerimeter()}`);