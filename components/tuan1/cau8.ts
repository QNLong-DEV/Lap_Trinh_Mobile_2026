interface Product {
    name: string,
    price: number
}

const newProducts: Product[] = [
    {
        name: "Laptop",
        price: 150
    },
    {
        name: "Phone",
        price: 80
    }
];

const filterProducts = newProducts.filter((item) => item.price > 100)
filterProducts.forEach(element => {
    console.log(element);
});