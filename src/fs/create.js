import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    filePass = path.resolve(__dirname, 'files', 'fresh.txt')
    fs.access(filePass, (err) => {
        if (err) {
            throw Error;
        } else {
            const writableStream = fs.createWriteStream(filePass)
            writableStream.write('I am fresh and young');
        }
    })
}
create();