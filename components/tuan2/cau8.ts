function cau8(): Promise<Number> {
    return new Promise((resolve, reject) => {
        resolve(2 * 2);
    })
}

function res() {
    cau8().then((resolve: Number) => {
        return resolve * 2;
    }).then((resolve2) => {
        const x: Number = resolve2 + 5;
        alert(x);
    });
}

res();

