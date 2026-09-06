async function fetchWithRetry(url: string, retries: number): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        if (retries > 0) {
            return fetchWithRetry(url, retries - 1);
        }
        throw error;
    }
}