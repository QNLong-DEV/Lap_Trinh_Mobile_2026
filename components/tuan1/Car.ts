interface Car {
    brand: string,
    model: string,
    year: number
}

const showCarInfo = (c: Car) => {
    console.log(c.brand + " " + c.model + " " + c.year);
}

let newCar: Car = {
    brand: "Lamborgini",
    model: "Aventado",
    year: 2026
}
showCarInfo(newCar);