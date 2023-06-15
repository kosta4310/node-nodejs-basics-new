import {readFile} from 'node:fs/promises';

import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const file = path.resolve(__dirname, './files/fileToRead.txt');
    try {
        const data = await readFile(file, {encoding: 'utf-8'});
        console.log(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await read();