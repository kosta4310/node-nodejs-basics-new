const parseArgs = () => {
    const arrArgs = process.argv;
    const res = [];
    for (let i = 2; i < arrArgs.length; i++) {
        const element = arrArgs[i];
        if (element.startsWith('--')) {
            res.push(`${element.slice(2)} is ${arrArgs[i + 1]}`);
        }
    } 
    console.log(res.join(', '));
};

parseArgs();