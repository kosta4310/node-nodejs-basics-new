import {createWriteStream} from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const write = async () => {
    const pathToFile = path.resolve(__dirname, './files/fileToWrite.txt');
    const writeStream =  createWriteStream(pathToFile);
    writeStream.on('error', () => {
        throw new Error('FS operation failed');
    })
    process.stdin.pipe(writeStream);
};

await write();