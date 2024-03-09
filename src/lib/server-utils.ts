// Async function to load HTML content from a file
export async function loadHtmlContent(fetch, filename) {
    const url = `/html/${filename}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response.text();
}