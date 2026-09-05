const cau3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("something went wrong");
    }, 1000)
})

cau3.catch((error) => {
    alert(error);
})