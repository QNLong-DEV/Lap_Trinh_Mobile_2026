interface Vehicle {
    brand: string;
    speed: number;
    start(): void;
}

class Car implements Vehicle {
    constructor(public brand: string, public speed: number) { }

    public start(): void {
        console.log(`Xe ô tô hãng ${this.brand} khởi động với tốc độ tối đa ${this.speed} km/h.`);
    }
}

class Bike implements Vehicle {
    constructor(public brand: string, public speed: number) { }

    public start(): void {
        console.log(`Xe đạp hãng ${this.brand} sẵn sàng di chuyển với tốc độ ${this.speed} km/h.`);
    }
}


const myCar = new Car("Toyota", 180);
myCar.start();

const myBike = new Bike("Giant", 40);
myBike.start();