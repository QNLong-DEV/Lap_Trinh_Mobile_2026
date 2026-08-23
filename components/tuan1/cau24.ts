abstract class Appliance {
    public abstract turnOn(): void;
}

class Fan extends Appliance {
    public turnOn(): void {
        console.log("Quạt đang được bật.");
    }
}

class AirConditioner extends Appliance {
    public turnOn(): void {
        console.log("Điều hòa đang được bật.");
    }
}

const fan = new Fan();
fan.turnOn();

const ac = new AirConditioner();
ac.turnOn();