export default class {
    constructor(){
        this.diffrence = 2
        this.startingNum = 2
        this.wordsToNumbersEnabled = true;
        this.mathEnabled = true;
        this.name = "2s"
    }

    toDecimal(num) {
        return parseInt(num)
    }
    
    fromDecimal(num) {
        return num.toString();
    }

    formatScoreString(index, name, number) {
        return `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`
    }    
}