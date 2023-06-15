import {} from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import {EOL} from 'node:os';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
    process.stdin.on('data', (data) => {
        if(data !== null) {
            const context = data.toString();
            process.stdout.write(context.split('').reverse().join('') + EOL);
        }
    })
};

await transform();