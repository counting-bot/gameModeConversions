export default class {
    constructor(){
        this.diffrence = 1
        this.startingNum = 1
        this.wordsToNumbersEnabled = false;
        this.mathEnabled = true;
        this.name = "time"
    }

    toDecimal(num) {
        return num.split(':').reverse().reduce((prev, curr, i) => prev + curr*Math.pow(60, i), 0);
    }

    fromDecimal(num) {
        const hh = Math.floor(num / 3600);
        num %= 3600;

        const mm = Math.floor(num / 60);
        const ss = num % 60;

        return [hh, mm, ss].map(v => String(v).padStart(2, '0')).join(':');
    }

    formatScoreString(index, name, number){
        return `**#${index + 1}** ${name}, **${this.toDecimal(number).toLocaleString()}**`;
    }
}