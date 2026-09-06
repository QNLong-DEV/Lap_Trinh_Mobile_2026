interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchMultipleTodos(ids: number[]) {
    try {
        console.log(`Đang gọi API song song cho ${ids.length} công việc...`);
        
        const fetchPromises = ids.map(async (id) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            
            if (!response.ok) {
                throw new Error(`Lỗi HTTP ở ID ${id}! Trạng thái: ${response.status}`);
            }

            const data: Todo = await response.json();
            return data;
        });

 
        const results = await Promise.all(fetchPromises);

        console.log("Đã tải xong tất cả! Danh sách chi tiết:");
        results.forEach(todo => {
            console.log(`- [${todo.completed ? 'x' : ' '}] Công việc ${todo.id}: ${todo.title}`);
        });

    } catch (error) {

        console.error("Quá trình gọi danh sách API bị lỗi:", error);
    }
}


fetchMultipleTodos([1, 2, 3]);