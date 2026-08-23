class Book {
    constructor(public id: number, public title: string) { }
}

class User {
    constructor(public id: number, public name: string) { }
}

class Library {
    private books: Book[] = [];
    private users: User[] = [];


    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm thành công cuốn sách: "${book.title}" vào thư viện.`);
    }

    public addUser(user: User): void {
        this.users.push(user);
        console.log(`Đã đăng ký thành công người dùng: ${user.name}.`);
    }

    public listBooks(): void {
        console.log("--- Danh sách Sách trong Thư Viện ---");
        this.books.forEach(b => console.log(`- [ID: ${b.id}] ${b.title}`));
    }
}


const myLibrary = new Library();

const book1 = new Book(1, "TypeScript Cơ Bản");
const book2 = new Book(2, "Lập Trình React Native");
const user1 = new User(1, "Nguyễn Văn A");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addUser(user1);

myLibrary.listBooks();