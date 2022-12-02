import { readdir, mkdir, copyFile } from 'fs/promises';

export const copy = async () => {
    try {
        await mkdir('files_copy');
        const readDir = await readdir('files')
        readDir.map(file => copyFile(`files/${file}`, `files_copy/${file}`))
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

copy();