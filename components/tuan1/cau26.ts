class Product {
    constructor(public id: number, public name: string, public price: number) { }
}

class Order {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public calculateTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
const product1 = new Product(1, "Áo thun", 150);
const product2 = new Product(2, "Quần jean", 300);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

console.log(`Tổng tiền đơn hàng: ${order.calculateTotalPrice()}`);