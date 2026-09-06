interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchTodoData() {
    try {
        console.log("Đang tải dữ liệu từ Server...");

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`); 
        }

        const data: Todo = await response.json();

        console.log("Lấy dữ liệu thành công!");
        console.log("ID:", data.id);
        console.log("Tiêu đề:", data.title);
        console.log("Trạng thái hoàn thành:", data.completed ? "Rồi" : "Chưa");

    } catch (error) {
        console.error("Ôi hỏng, có lỗi xảy ra:", error);
    } finally {
        console.log("=> Hoàn thành quá trình fetch (có thể tắt hiệu ứng loading ở đây)");
    }
}

fetchTodoData();