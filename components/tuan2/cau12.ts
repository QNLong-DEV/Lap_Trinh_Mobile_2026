async function simulateTask(time: Number): Promise<String> {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time)
    })
}

async function result() {
    await simulateTask(5000).then((res) => {
        alert(res);
    })
}

result();
