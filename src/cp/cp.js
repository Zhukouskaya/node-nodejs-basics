import { spawn } from 'child_process'
import process from 'process';

export const spawnChildProcess = async (args) => {
    const cd = spawn('node', ['src/cp/files/script.js', ...args])

    process.stdin.on('data', (msg) => {
        cd.stdin.write(msg);
    })

    cd.stdout.on('data', (data) => { 
        console.log(data.toString())
    })

    
};

spawnChildProcess('a', 'b', 'c');