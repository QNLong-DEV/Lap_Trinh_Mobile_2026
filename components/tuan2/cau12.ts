function simulateTask(time: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time);
    });
}

async function result() {
    const res = await simulateTask(5000); 
    
    alert(res);
}

result();