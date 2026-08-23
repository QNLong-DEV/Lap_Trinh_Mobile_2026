class Car {
    public brand: string;
    public model: string;
    public year: number;

    
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }


    public showCarInfo(): void {
        console.log(this.brand + " " + this.model + " " + this.year);
    }
}


const newCar = new Car("Lamborgini", "Aventado", 2026);


newCar.showCarInfo();