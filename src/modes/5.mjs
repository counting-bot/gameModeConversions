export default class {
    constructor(){
        this.diffrence = 5
        this.startingNum = 5
        this.wordsToNumbersEnabled = true;
        this.mathEnabled = true;
        this.name = "5s"
    }

    toDecimal(num) {
        return parseInt(num)
    }

    fromDecimal(num) {
        return num.toString()
    }

    formatScoreString(index, name, number) {
        return `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;    
    }
}