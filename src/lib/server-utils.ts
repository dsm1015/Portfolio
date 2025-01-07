// Async function to load HTML content from a file
export async function loadHtmlContent(fetch, filename) {
    const url = `/html/${filename}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response.text();
}

// Async function to load Markdown content from a file
export async function loadMarkdownContent(fetch, filename) {
    const url = `/markdown/${filename}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response.text();
}