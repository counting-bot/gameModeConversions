export const toDecimal = num => {
    num=num.toString()
    
    const des = parseInt(num, 2);

    if (fromDecimal(des) !== num) return undefined;

    return des;
};

export const fromDecimal = num => num.toString(2);

export const diffrence = 1

export const startingNum = 1

export const wordsToNumbersEnabled = false;

export const mathEnabled = true;

export const name = "binary"

export const formatScoreString = (index, name, number) => `**#${index + 1}** ${name}, **${number}**`;