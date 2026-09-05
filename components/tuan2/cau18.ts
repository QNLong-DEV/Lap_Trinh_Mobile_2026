async function fetchUser(id: String) {
    return await new Promise((resolve, reject) => {
        if (id === "123") {
            setTimeout(() => {
                resolve({ userid: "123", name: "Long" })
            }, 1000)
        }
    })
}

const check = fetchUser("123").then((data) => alert("Tim thay user: " + data.name));
