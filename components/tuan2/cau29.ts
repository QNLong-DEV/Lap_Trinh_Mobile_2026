const taskDelay = (id: number): Promise<string> => {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} completed`), 1000));
};

async function queueProcess(): Promise<void> {
    const taskIds = [1, 2, 3, 4, 5];
    for (const id of taskIds) {
        const result = await taskDelay(id);
        console.log(result);
    }
}

queueProcess();