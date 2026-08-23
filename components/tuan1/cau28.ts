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
