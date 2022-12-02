import { readdir } from 'fs/promises';

export const list = async () => {
    try {
        const filesDir = await readdir('files')
        filesDir.forEach(file => console.log(file))
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

list();
