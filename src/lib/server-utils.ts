import fs from 'fs';
import path from 'path';

// Async function to load HTML content from a file
export async function loadHtmlContent(filename) {
    const filePath = path.resolve('src/lib/project-content', filename);
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}