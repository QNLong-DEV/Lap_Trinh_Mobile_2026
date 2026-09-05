export const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("Hello Async")
    }, 2000)
})