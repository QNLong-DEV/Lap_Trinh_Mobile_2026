function fetchUser(id: string): Promise<{ userid: string; name: string }> {
    const users = [
        { userid: "1", name: "Long" },
        { userid: "2", name: "Dan" },
        { userid: "3", name: "Tran" }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(obj => obj.userid === id);
            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

async function fetchUsers(ids: string[]) {
    const promises = ids.map((id) => {
        return fetchUser(id);
    });

    const users = await Promise.all(promises);

    return users;
}

async function run() {
    const result = await fetchUsers(["1", "2", "3"]);

    console.log(result);
}

run();