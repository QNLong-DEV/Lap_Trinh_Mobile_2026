async function checkMultipleAPIs(): Promise<void> {
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/invalid-url',
        'https://jsonplaceholder.typicode.com/todos/2'
    ];

    const requests = urls.map(url => fetch(url));
    const results = await Promise.allSettled(requests);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`URL ${urls[index]} succeeded with status ${result.value.status}`);
        } else {
            console.log(`URL ${urls[index]} failed with reason: ${result.reason}`);
        }
    });
}

checkMultipleAPIs();