import { readFile } from 'fs/promises';

export const read = async () => {
    try {
        console.log(await readFile('files/fileToRead.txt', 'utf8'))
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

read();