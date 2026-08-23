class Logger {
  
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }


  public log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[INFO] [${timestamp}]: ${message}`);
  }


  public error(message: string): void {
    const timestamp = new Date().toISOString();
    console.error(`[ERROR] [${timestamp}]: ${message}`);
  }
}




const logger1 = Logger.getInstance();
logger1.log("Hệ thống khởi động thành công!");

const logger2 = Logger.getInstance();
logger2.error("Kết nối cơ sở dữ liệu thất bại!");


console.log(logger1 === logger2); 