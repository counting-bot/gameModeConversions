export default class {
    constructor(){
        this.diffrence = 10
        this.startingNum = 10
        this.wordsToNumbersEnabled = true;
        this.mathEnabled = true;
        this.name = "10s"
    }

    toDecimal(num) {
        return parseInt(num);
    }

    fromDecimal(num) {
        return num.toString();
    }
    
    formatScoreString(index, name, number) {
        return `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;
    }
}