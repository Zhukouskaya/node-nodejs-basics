import { createUnzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'; 

export const decompress = async () => {
    const read = createReadStream('src/zip/files/archive.gz')
    const write = createWriteStream( 'src/zip/files/fileToCompress.txt')

    read.pipe(createUnzip()).pipe(write)
};

decompress();