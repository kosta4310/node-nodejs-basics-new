import {writeFile} from 'node:fs/promises';

const create = async () => {
    const data = 'I am fresh and young';
    try {
        await writeFile('./src/fs/files/fresh.txt', data, {flag: 'wx'});
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
    } 
};

await create();