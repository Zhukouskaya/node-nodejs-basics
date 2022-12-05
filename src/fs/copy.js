import { readdir, mkdir, copyFile } from 'fs/promises';

export const copy = async () => {
    try {
        await mkdir('src/fs/files_copy');
        const readDir = await readdir('src/fs/files')
        readDir.map(file => copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`))
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

copy();