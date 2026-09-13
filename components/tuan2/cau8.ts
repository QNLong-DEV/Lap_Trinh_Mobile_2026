function cau8(): Promise<number> {
    return new Promise((resolve, reject) => {
        resolve(2 * 2);
    })
}

function res() {
    cau8().then((resolve: number) => {
        return resolve * 2;
    }).then((resolve2) => {
        const x: number = resolve2 + 5;
        alert(x);
    });
}

res();
