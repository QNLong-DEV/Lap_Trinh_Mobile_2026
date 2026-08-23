
class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public print(): void {
        console.log(this.name + " " + this.age);
    }
}


class Student extends Person {
    public grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age); 
        this.grade = grade;
    }


    public print(): void {
        console.log(this.name + " " + this.age + " " + this.grade);
    }
}


const newStudent = new Student("Long", 21, 10);
newStudent.print();