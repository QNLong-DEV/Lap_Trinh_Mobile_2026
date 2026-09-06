async function promise() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello async");
        }, 2000)
    })

}

async function result() {
    const message = await promise();
    alert(message);
}

result();
