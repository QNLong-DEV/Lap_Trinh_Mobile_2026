class Student {
    constructor(public name: string, public age: number) { }
}

class Teacher {
    constructor(public name: string, public age: number) { }
}

class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    public displayInfo(): void {
        console.log("--- Danh sách Học sinh ---");
        this.students.forEach(s => console.log(`- ${s.name}, ${s.age} tuổi`));

        console.log("--- Danh sách Giáo viên ---");
        this.teachers.forEach(t => console.log(`- ${t.name}, ${t.age} tuổi`));
    }
}
