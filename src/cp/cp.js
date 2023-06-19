import {fork} from 'node:child_process';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulePath = path.resolve(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {
    fork(modulePath, [...args]);
};

spawnChildProcess( ['Hello', 'my', 'friend!']);
