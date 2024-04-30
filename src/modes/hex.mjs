export default class {
    constructor(){
        this.diffrence = 1
        this.startingNum = 1
        this.wordsToNumbersEnabled = false;
        this.mathEnabled = false;
        this.name = "hexadecimal"
    }
  
    toDecimal(num) {
        num = num.toString().toLowerCase()
        const des = parseInt(num, 16);
    
        if (fromDecimal(des) !== num) return undefined;
    
        return des;
    };

    fromDecimal(num) {
        return num.toString(16);
    }

    formatScoreString(index, name, number) {
        return`**#${index + 1}** ${name}, **${Number(number).toLocaleString()}**`;
    }
}