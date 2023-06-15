import {createReadStream, createWriteStream} from 'fs';
import {createUnzip} from 'node:zlib';
import url from 'node:url';
import path from 'node:path';
import { pipeline } from 'stream';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const unzip = createUnzip();
    const pathToSource = path.resolve(__dirname, './files/archive.gz');
    const pathToDestination = path.resolve(__dirname, './files/fileToCompress.txt');
    const readStream = createReadStream(pathToSource);
    const writeStream = createWriteStream(pathToDestination);

    pipeline(
        readStream, unzip, writeStream, (error) => {
            if (error) {
                throw new Error('FS operation failed');
            }
        }
    ) 
};

await decompress();