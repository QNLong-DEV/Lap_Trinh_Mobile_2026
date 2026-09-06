async function downloadFile(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Download completed");
}

downloadFile();