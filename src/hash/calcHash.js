const {
    createHash,
  } = await import('node:crypto');
import {readFile} from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const file = path.resolve(__dirname, './files/fileToCalculateHashFor.txt');
     try {
        const data = await readFile(file, {encoding: 'utf-8'});
        const hash = createHash('sha256');
        hash.update(data);
        console.log(hash.digest('hex'));
     } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
     }
};

await calculateHash();