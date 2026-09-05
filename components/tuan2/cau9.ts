function promise(arrs: Number[]): Promise<Number[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrs.filter((num) => num % 2 == 0))
        }, 1000)
    })
}

function res() {
    let arrs: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    promise(arrs).then((resolve) => {
        resolve.forEach((a) => {
            console.log(a);
        })
    })
}

res();