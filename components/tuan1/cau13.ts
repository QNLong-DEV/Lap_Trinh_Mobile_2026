abstract class Shape {
    public abstract area(): number;

    public displayInfo(): void {
        console.log(`Diện tích tính được là: ${this.area()}`);
    }
}

class Square extends Shape {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    public area(): number {
        return this.side * this.side;
    }

}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }


    public area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const mySquare = new Square(4);
mySquare.displayInfo();

const myCircle = new Circle(3);
myCircle.displayInfo();