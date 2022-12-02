import { rename as renameFile } from 'fs/promises';

export const rename = async () => {
    try {
        await renameFile ('files/wrongFilename.txt', 'files/properFilename.md') 
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

rename();