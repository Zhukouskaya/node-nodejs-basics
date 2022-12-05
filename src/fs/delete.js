import { rm } from 'fs/promises'

export const remove = async () => {
    try {
        await rm('src/fs/files/fileToRemove.txt')
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

await remove();