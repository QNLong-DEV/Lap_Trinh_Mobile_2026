const dummyTask = (id: number): Promise<string> => {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000));
};

async function batchProcess(): Promise<string[]> {
    const tasks = [1, 2, 3, 4, 5].map(id => dummyTask(id));
    const results = await Promise.all(tasks);
    console.log(results);
    return results;
}

batchProcess();