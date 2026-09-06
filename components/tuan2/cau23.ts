
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchCompletedTodos() {
    try {
        console.log("Đang tải danh sách công việc từ Server...");
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
        }
        
        const allTodos: Todo[] = await response.json();


        const completedTodos = allTodos.filter(todo => todo.completed === true);

        console.log(`=> Đã lấy về tổng cộng: ${allTodos.length} công việc.`);
        console.log(`=> Số công việc ĐÃ hoàn thành: ${completedTodos.length} công việc.`);
        
        console.log("Danh sách mẫu (3 công việc đầu):", completedTodos.slice(0, 3));

        return completedTodos;

    } catch (error) {
        console.error("Lỗi trong quá trình lấy hoặc lọc dữ liệu:", error);
    }
}

fetchCompletedTodos();