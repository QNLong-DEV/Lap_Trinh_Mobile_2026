
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  public getContent(): T {
    return this.content;
  }

  public setContent(newContent: T): void {
    this.content = newContent;
  }
}


const stringBox = new Box<string>("Xin chào TypeScript!");
console.log(stringBox.getContent()); 


const numberBox = new Box<number>(100);
numberBox.setContent(250);
console.log(numberBox.getContent());

interface Item {
  id: number;
  name: string;
}

const itemBox = new Box<Item>({ id: 1, name: "Áo khoác" });
console.log(`Sản phẩm trong hộp: ${itemBox.getContent().name}`);