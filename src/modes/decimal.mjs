export const toDecimal = num => Number(num);

export const fromDecimal = num => num.toString();

export const diffrence = 0.1

export const startingNum = 0.1

export const wordsToNumbersEnabled = true;

export const mathEnabled = true;

export const name = "decimals"

export const formatScoreString = (index, name, number) => `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;