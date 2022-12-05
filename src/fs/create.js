import { writeFile } from 'fs/promises';

export const create = async () => {
    try {
        await writeFile('src/fs/files/fresh.txt',  'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

create();