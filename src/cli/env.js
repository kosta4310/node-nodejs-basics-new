const parseEnv = () => {
    const env = process.env;
    const res = [];
    for (const key in env) {
        if (Object.hasOwnProperty.call(env, key)) {
            const element = env[key];
            if (key.startsWith('RSS')) {
                res.push(key + '=' + element);
            }
        }
    }
    console.log(res.join('; '));
};

parseEnv();