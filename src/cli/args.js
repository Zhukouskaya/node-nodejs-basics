const parseArgs = () => {
    const arg = process.argv;
    const result = arg.slice(2).reduce((accumulator, argument, index, array) => {
        const nextArg = array[index + 1];
        if (nextArg && argument.startsWith('--')) {
            accumulator.push(`${argument.slice(2)} is ${nextArg}`)
        }
        return accumulator
    }, []).join(', ')
    console.log(result)
};

parseArgs();