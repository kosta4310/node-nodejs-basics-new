import {rm} from 'node:fs/promises';

import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const source = path.resolve(__dirname, './files/fileToRemove.txt')
    try {
        await rm(source);
    } catch (error) {
        if (error.code === 'EEXIST' || error.code === 'ENOENT') {
            
            throw new Error('FS operation failed');
        }
    } 
};

await remove();