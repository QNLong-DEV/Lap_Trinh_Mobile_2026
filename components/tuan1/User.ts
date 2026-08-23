class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }
}

const newUser = new User("Quach Ngoc Long");
console.log(newUser.getName);