import { a } from './a';
import b from './b';
import { lib } from './lib/lib';

const c = (c: string) => {
    return `${a}${b}${c} - ${lib}`;
};

export {
    c,
};
