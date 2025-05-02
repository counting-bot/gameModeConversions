export default class {
    constructor(){
        this.diffrence = 1
        this.startingNum = 1
        this.wordsToNumbersEnabled = false;
        this.mathEnabled = true;
        this.name = "binary"
    }

    toDecimal(num) {
        num=num?.toString()
    
        const des = parseInt(num, 2);
    
        if (this.fromDecimal(des) !== num) return undefined;
    
        return des;
    };

    fromDecimal(num) {
        return num.toString(2);
    }

    formatScoreString(index, name, number){
        return `**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;
    }
}
