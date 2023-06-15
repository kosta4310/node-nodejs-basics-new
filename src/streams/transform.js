import {} from 'node:fs';
import {EOL} from 'node:os';

const transform = async () => {
    process.stdin.on('data', (data) => {
        if(data !== null) {
            const context = data.toString();
            process.stdout.write(context.split('').reverse().join('') + EOL);
        }
    })
};

await transform();