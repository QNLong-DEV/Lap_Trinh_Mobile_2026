class Book {
    constructor(
        public title: string,
        public author: string,
        public year: number
    ) { }
}

const myBook = new Book("Lập trình TypeScript", "Nguyễn Văn A", 2026);

console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.year);