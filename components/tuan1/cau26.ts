class Product {
  constructor(public id: number, public name: string, public price: number) {}
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