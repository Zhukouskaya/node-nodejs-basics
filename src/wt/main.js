import { Worker } from 'worker_threads'
import { cpus } from 'os'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
    const cPus = cpus();
    let startNumber = 2;
    const toWorker = await Promise.allSettled(cPus.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker (__dirname + '/worker.js', {
                workerData: startNumber++
            })
            worker.on('message', msg => resolve(msg))
            worker.on('error', msg => reject(msg))
        })
    }))
    const result = toWorker.map(i => ({
        status: i.status === 'fulfilled' ? 'resolved' : 'erorr',
        data: i.status === 'fulfilled' ? i.value : null
    }))
    
    return console.log(result)
};

performCalculations();