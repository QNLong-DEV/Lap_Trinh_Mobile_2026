class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo() {
        console.log("name = " + this.name);
        console.log("age = " + this.age);
    }
}

const myPerson = new Person("Long", 21);
myPerson.displayInfo();