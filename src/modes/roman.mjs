const fromRomanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
export const toDecimal = input => {
    if (!/^[a-zA-Z]+$/g.test(input)) return
    let roman = input.toUpperCase().split('');
    let num = 0;
    let val = 0;

    while (roman.length) {
        val = fromRomanNumerals[roman.shift()];
        num += val * (val < fromRomanNumerals[roman[0]] ? -1 : 1);
    }

    if (input !== fromDecimal(num)) return undefined

    return num;
}

const toRomanNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
const toRomanKeys = Object.keys(toRomanNumerals);
export const fromDecimal = num => {
    let str = '';

    for (let i = 0; i < toRomanKeys.length; i++) {
        let key = toRomanKeys[i];
        str += repeat(key, num / toRomanNumerals[key] >>> 0);
        num %= toRomanNumerals[key];
    }
    return str;
};
function repeat(str, num) {
    let res = '';

    if (typeof str !== 'string') {
        throw new TypeError('expected a string');
    }

    // cover common, quick use cases
    if (num === 1) return str;
    if (num === 2) return str + str;

    let max = str.length * num;
    if (res.length >= max) return res.substring(0, max);

    while (max > res.length && num > 1) {
        if (num & 1) res += str;
        num >>= 1;
        str += str;
    }

    res += str;
    return res.substring(0, max);
}

export const diffrence = 1

export const startingNum = 1

export const wordsToNumbersEnabled = false;

export const mathEnabled = true;

export const name = "roman numerals"