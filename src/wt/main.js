import {cpus} from 'node:os';
import {Worker} from 'node:worker_threads';

import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const numOfCore = cpus().length;
    const pathToWorker = path.resolve(__dirname, './worker.js');
    const arrayOrWorkers = [];
    for (let i = 0; i < numOfCore; i++) {
        const workerPromise = new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorker, { workerData: 10 + i});

            worker.on('message', (msg) => {
                resolve(msg);
            });

            worker.on('error', () => {
                reject({status: 'error', data: null});
            })

            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject({status: 'error', data: null});
                }
            })
        })
        arrayOrWorkers.push(workerPromise);
              
    }
    const workers = await Promise.allSettled(arrayOrWorkers);
    const result = workers.map(response => {
        if (response.status === 'fulfilled') {
            return response.value;
        } else return response.reason;
    })
    console.log(result);

};

await performCalculations();