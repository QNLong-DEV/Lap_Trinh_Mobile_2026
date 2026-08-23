class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number = 0): void {
        console.log(`${this.name} di chuyển ${distanceInMeters} mét.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public bark(): void {
        console.log(`${this.name} đang sủa: Gâu gâu!`);
    }
}


class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    public meow(): void {
        console.log(`${this.name} đang kêu: Meo meo!`);
    }
}

const myDog = new Dog("Cún Con");
myDog.move(5);
myDog.bark();

const myCat = new Cat("Mi Mi");
myCat.move(2);
myCat.meow();