import { createReadStream } from 'fs'

export const read = async () => {
    const read = createReadStream('src/streams/files/filetoRead.txt', 'utf-8')
    read.on('data', (data) => {
        process.stdout.write(data)
    })
};

read();