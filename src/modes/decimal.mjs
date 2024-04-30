export default class {
    constructor(){
        this.diffrence = 0.1
        this.startingNum = 0.1
        this.wordsToNumbersEnabled = true;
        this.mathEnabled = true;
        this.name = "decimals"
    }

    toDecimal(num) {
        return Number(num);
    }
    
    fromDecimal(num) {
        return num.toString();
    }

    formatScoreString(index, name, number) {
        return`**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;
    }
}