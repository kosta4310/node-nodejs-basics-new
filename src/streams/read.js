import {createReadStream} from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const pahtToFile = path.resolve(__dirname, './files/fileToRead.txt');
    const readStream = createReadStream(pahtToFile, {encoding: 'utf-8'}); 
    
    readStream.on('error', (error) => {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    })

    readStream.pipe(process.stdout);
   
};

await read();