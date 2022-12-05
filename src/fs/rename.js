import { rename as renameFile } from 'fs/promises';

export const rename = async () => {
    try {
        await renameFile ('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md') 
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

rename();