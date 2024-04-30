export default class {
    constructor(){
        this.diffrence = 1
        this.startingNum = 1
        this.wordsToNumbersEnabled = true;
        this.mathEnabled = true;
        this.name = "whole numbers"
    }

    toDecimal(num) {
        return Number(num);
    }

    fromDecimal(num) {
        return num.toString();
    }

    formatScoreString(index, name, number){
        `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;
    }
}