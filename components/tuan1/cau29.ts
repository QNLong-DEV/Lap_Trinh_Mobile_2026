interface Movable {
    move(): void;
}

class Car implements Movable {
    public move(): void {
        console.log("Ô tô đang di chuyển trên đường.");
    }
}

class Robot implements Movable {
    public move(): void {
        console.log("Robot đang di chuyển bằng bánh xe.");
    }
}
