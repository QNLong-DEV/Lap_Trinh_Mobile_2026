
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log(`${this.name} tạo ra âm thanh chung.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}


class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }


  public makeSound(): void {
    console.log(`${this.name} kêu: Meo meo! `);
  }
}


const animals: Animal[] = [
  new Dog("Cực Phấm"),
  new Cat("Miu Miu"),
  new Animal("Động vật lạ")
];

animals.forEach(animal => {
  animal.makeSound();
});