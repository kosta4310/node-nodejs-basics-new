import {readdir} from 'node:fs/promises';

import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folder = path.resolve(__dirname, './files');
    try {
        const dirents = await readdir(folder, {withFileTypes: true});
        for (const dirent of dirents) {
            if (dirent.isFile) {
                console.log(dirent.name);
            }
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await list();