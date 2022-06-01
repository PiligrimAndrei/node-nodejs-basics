import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    fs.access(path.resolve(__dirname, 'files', 'fresh.txt'), (err) => {
        if (err) {
            throw Error;
        } else {
            const writableStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fresh.txt'))
            console.log(path.resolve(__dirname, 'files', 'fresh.txt'))
            writableStream.write('I am fresh and young');
        }
    })
}
create();