async function simulateTask(time: Number): Promise<String> {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time)
    })
}

async function res() {
    await Promise.all([
        simulateTask(1000).then(resolve => {
            console.log("task 1 sau 1s")
        }),
        simulateTask(2000).then(resolve => {
            console.log("task 2 sau 2s")
        }),
        simulateTask(3000).then(resolve => {
            console.log("task 3 sau 3s")
        })
    ]).then(results => {
        alert("Da xong 3 tasks")
    })
}

res()