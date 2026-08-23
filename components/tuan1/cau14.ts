
class Employee {
    public name: string;
    public salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public getDetails(): void {
        console.log(`Nhân viên: ${this.name}, Lương: ${this.salary} VNĐ`);
    }
}


class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    public manageTeam(): void {
        console.log(`Quản lý ${this.name} đang điều hành một đội ngũ gồm ${this.teamSize} nhân sự .`);
    }
}


class Developer extends Employee {
    public programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    public writeCode(): void {
        console.log(`Lập trình viên ${this.name} đang viết mã nguồn bằng ngôn ngữ ${this.programmingLanguage} .`);
    }
}


const manager = new Manager("Nguyễn Văn A", 25000000, 5);
manager.getDetails();
manager.manageTeam();

const developer = new Developer("Trần Thị B", 20000000, "TypeScript");
developer.getDetails();
developer.writeCode();