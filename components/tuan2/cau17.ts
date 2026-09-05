async function simulateTask(time: Number): Promise<String> {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time)
    })
}



const tasks = [
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000),
];

async function run() {
    for await (const res of tasks) {
        alert(res)
    }
}

run();