async function promise() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello async");
        }, 2000)
    })

}

async function result() {
    await promise().then((resolve) => {
        alert(resolve);
    })
}

result();
