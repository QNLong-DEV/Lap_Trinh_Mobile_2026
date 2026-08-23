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
const cash = new CashPayment();
cash.pay(500);

const card = new CardPayment();
card.pay(1200);