export default class {
    constructor(){
        this.diffrence = 100
        this.startingNum = 100
        this.wordsToNumbersEnabled = true;
        this.mathEnabled = true;
        this.name = "100s"
    }

    toDecimal(num) {
        return parseInt(num);
    }

    fromDecimal(num) {
        return num.toString();
    }

    formatScoreString(index, name, number){
        return `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;
    }    
}