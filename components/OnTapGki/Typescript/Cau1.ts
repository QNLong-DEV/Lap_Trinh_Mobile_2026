interface Product {
    readonly id: string;
    name: string;
    price: number;
    description?: string;
}

interface Laptop extends Product {
    ram: number;
    isTouchScreen: boolean;
}

const myLapTop: Laptop = {
    id: "1",
    name: "lenovo",
    price: 100000,
    description: "mylaptop",
    ram: 16,
    isTouchScreen: false
}