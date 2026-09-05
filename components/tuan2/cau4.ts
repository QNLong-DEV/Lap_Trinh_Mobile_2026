function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function promise(): Promise<Number> {
    return new Promise((resolve, reject) => {
        let res = getRandomInt(1, 10);
        if (res <= 5) {
            resolve(res);
        } else {
            reject(res);
        }
    })
}

function getNumber() {
    promise().then((res) => alert("Dung: " + res)).catch((error) => alert("Sai: " + error));
}

getNumber();