function simulateTask(time: Number): Promise<String> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time)
    })
}

Promise.race([
    simulateTask(1000).then(resolve => {
        console.log("task 1")
    }),
    simulateTask(2000).then(resolve => {
        console.log("task 2")
    }),
    simulateTask(3000).then(resolve => {
        console.log("task 3")
    })
]).then(results => {
    alert("Da xong 3 tasks")
})