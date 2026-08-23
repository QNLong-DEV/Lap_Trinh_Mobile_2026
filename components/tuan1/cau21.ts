class Repository<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public getAll(): T[] {
        return this.items;
    }
}

const repo = new Repository<string>();
repo.add("TypeScript");
repo.add("React Native");

console.log(repo.getAll());