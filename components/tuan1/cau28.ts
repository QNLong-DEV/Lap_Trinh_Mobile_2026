class Animal {
    protected makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    public makeSound(): void {
        console.log("Dog barks: Woof woof!");
    }
}

class Cat extends Animal {
    public makeSound(): void {
        console.log("Cat meows: Meow meow!");
    }
}
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();