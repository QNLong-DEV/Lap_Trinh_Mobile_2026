const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

promise.then(result => {
    alert(result)
});