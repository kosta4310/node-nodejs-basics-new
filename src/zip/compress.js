import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'node:zlib';
import url from 'node:url';
import path from 'node:path';
import { pipeline } from 'stream';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const gzip = createGzip();
    const pathToSource = path.resolve(__dirname, './files/fileToCompress.txt');
    const pathToDestination = path.resolve(__dirname, './files/archive.gz');
    const readStream = createReadStream(pathToSource);
    const writeStream = createWriteStream(pathToDestination);

    pipeline(
        readStream, gzip, writeStream, (error) => {
            if (error) {
                throw new Error('FS operation failed');
            }
        }
    )
};

await compress();