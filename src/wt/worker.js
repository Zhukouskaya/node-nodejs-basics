import { workerData, parentPort, MessageChannel } from 'worker_threads';

export const nthFibonacci = () => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData))
};

sendResult();