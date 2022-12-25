import { createGzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'; 

export const compress = async () => {
    const read = createReadStream('src/zip/files/fileToCompress.txt')
    const write = createWriteStream('src/zip/files/archive.gz')

    read.pipe(createGzip()).pipe(write)
};

compress();