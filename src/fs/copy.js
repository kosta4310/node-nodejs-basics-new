import {mkdir, readdir, copyFile} from 'node:fs/promises';

import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const src = path.resolve(__dirname, './files');
    const dest = path.resolve(__dirname, './files_copy');
    try {
        const files = await readdir(src);
        await mkdir(dest);
        for (const file of files) {
            
            copyFile(path.resolve(src, file), path.resolve(dest, file));
        }
    } catch (error) {
        if (error.code === 'EEXIST' || error.code === 'ENOENT') {
            
            throw new Error('FS operation failed');
        }
    }
};

await copy();
