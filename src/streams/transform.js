import { Transform } from 'stream'
import { EOL } from 'os' 

export const transform = async () => {
    const reverse = new Transform ({
        transform (text, encoding, toReverce) {
            toReverce(null, text.toString().replace(EOL, '').split('').reverse().join('')+EOL)
        },
    })
    process.stdin.pipe(reverse).pipe(process.stdout);
};

transform();