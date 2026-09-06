
function fetchUser(id: string): Promise<{ userid: string; name: string }> {
    const users = [
        { userid: "1", name: "Long" },
        { userid: "2", name: "Dan" },
        { userid: "3", name: "Tran" }
    ];

    return new Promise((resolve, reject) => {

        const randomDelay = Math.floor(Math.random() * 2000) + 1000; 
        
        setTimeout(() => {
            const user = users.find(obj => obj.userid === id);
            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, randomDelay);
    });
}

function timeout(ms: number): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(`Lỗi: API call mất quá ${ms}ms (Timeout!)`);
        }, ms);
    });
}


async function runTask20() {
    try {
        console.log("Đang gọi API...");
    
        const result = await Promise.race([
            fetchUser("1"), 
            timeout(2000)
        ]);
        console.log("Thành công! Lấy được data:", result);
        
    } catch (error) {
        console.error(error);
    }
}

runTask20();