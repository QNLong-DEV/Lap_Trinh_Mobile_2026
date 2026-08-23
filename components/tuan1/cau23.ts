interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    public pay(amount: number): void {
        console.log(`Thanh toán ${amount} bằng tiền mặt.`);
    }
}

class CardPayment implements Payment {
    public pay(amount: number): void {
        console.log(`Thanh toán ${amount} bằng thẻ ngân hàng.`);
    }
}