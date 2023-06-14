import {mkdir, readdir, copyFile, stat, rename as ren} from 'node:fs/promises';

import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const inFile = path.resolve(__dirname, './files/wrongFilename.txt');
    const outFile = path.resolve(__dirname, './files/properFilename.md');

    try {
        await ren(inFile, outFile);
    } catch (error) {
        if (error.code === 'EEXIST' || error.code === 'ENOENT') {
            
            throw new Error('FS operation failed');
        }
    }
};

await rename();