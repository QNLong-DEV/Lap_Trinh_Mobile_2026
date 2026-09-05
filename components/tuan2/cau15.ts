async function simulateTask(time: Number): Promise<String> {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done after " + time);
        }, time)
    })
}

async function cau15() {
    const res1 = await simulateTask(2000);
    const res2 = await simulateTask(1000);
    const res3 = await simulateTask(3000);

    console.log(res1);
    console.log(res2);
    console.log(res3);
}

cau15();