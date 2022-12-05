import { createHash } from 'crypto'
import  { readFile } from 'fs/promises'

export const calculateHash = async () => {
    try {
        const hash = createHash('sha256').update(await readFile('src/hash/files/fileToCalculateHashFor.txt')).digest('hex')
        console.log(hash)
    } catch (err) {
        throw new Error(err)
    }
};

calculateHash();