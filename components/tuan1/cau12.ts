
interface Flyable {
  fly(): void;
}


interface Swimmable {
  swim(): void;
}


class Bird implements Flyable {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public fly(): void {
    console.log(`${this.name} đang bay trên bầu trời .`);
  }
}


class Fish implements Swimmable {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public swim(): void {
    console.log(`${this.name} đang bơi lội dưới nước 🐟.`);
  }
}


const eagle = new Bird("Chim Đại Bàng");
eagle.fly();

const shark = new Fish("Cá Mập");
shark.swim();