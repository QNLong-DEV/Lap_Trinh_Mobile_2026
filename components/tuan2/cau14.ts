async function cau14() {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(12);
        }, 1000);
    });

    console.log(result);
}

cau14();