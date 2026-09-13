function simulateTask(time: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time)
    })
}

function result() {
    simulateTask(5000).then((res) => {
        alert(res);
    })
}

result();
