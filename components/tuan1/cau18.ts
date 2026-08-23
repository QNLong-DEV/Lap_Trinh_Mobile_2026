class MathUtil {

  private constructor() {}

  public static add(a: number, b: number): number {
    return a + b;
  }

  public static subtract(a: number, b: number): number {
    return a - b;
  }


  public static multiply(a: number, b: number): number {
    return a * b;
  }


  public static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Lỗi: Không thể chia cho số 0!");
    }
    return a / b;
  }
}



console.log(`Cộng (5 + 3): ${MathUtil.add(5, 3)}`);        
console.log(`Trừ (10 - 4): ${MathUtil.subtract(10, 4)}`);     
console.log(`Nhân (6 * 7): ${MathUtil.multiply(6, 7)}`);    
console.log(`Chia (20 / 4): ${MathUtil.divide(20, 4)}`);    