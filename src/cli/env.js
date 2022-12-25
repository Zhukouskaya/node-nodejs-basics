export const parseEnv = () => {
    const result = Object.entries(process.env).reduce((accumulator, [key, value]) => {
        if (key.startsWith('RSS_')) {
            accumulator.push(`${key}=${value}`);
        }
            return accumulator;
    }, []).join('; ');

    console.log(result)
};

parseEnv();