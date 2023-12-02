export const toDecimal = num => {
    num = num.toString().toLowerCase()
    const des = parseInt(num, 16);

    if (fromDecimal(des) !== num) return undefined;

    return des;
}

export const fromDecimal = num => num.toString(16);

export const diffrence = 1

export const startingNum = 1

export const wordsToNumbersEnabled = false;

export const mathEnabled = false;

export const name = "hexadecimal"

export const formatScoreString = (index, name, number) => `**#${index + 1}** ${name}, **${number}**`;