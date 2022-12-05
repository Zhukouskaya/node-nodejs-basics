import { createWriteStream } from 'fs'

export const write = async () => {
    const writeText = createWriteStream('src/streams/files/fileToWrite.txt')
    process.stdin.on('data', (data) => {
        writeText.write(data.toString());
    });
};

write();