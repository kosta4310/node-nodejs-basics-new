import {parentPort, workerData} from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // For testing uncomment follow lines
    // if (Math.random() > 0.5) {
    //     throw new Error('Error in worker');
    // }
    const res = nthFibonacci(workerData);
    parentPort.postMessage({status: 'resolved', data: res});
};

sendResult();