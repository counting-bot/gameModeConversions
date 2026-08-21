export default class {
    constructor(){
        this.diffrence = 1
        this.startingNum = 1
        this.wordsToNumbersEnabled = false;
        this.mathEnabled = true;
        this.name = "time"
    }

    toDecimal(num) {
        const parts = num.split(":");
        if (parts.length > 5) return undefined;

        parts[0] = parts[0].replace(/^(\d+)d$/, "$1");
        if (parts.some(p => !/^\d+$/.test(p))) return undefined;

        const values = parts.map(Number).reverse();

        if ((values[0] ?? 0) > 59) return undefined; // seconds
        if ((values[1] ?? 0) > 59) return undefined; // minutes
        if ((values[2] ?? 0) > 23) return undefined; // hours

        const multipliers = [
            1,        // seconds
            60,       // minutes
            3600,     // hours
            86400,    // days
            31536000  // years (365 days)
        ];

        return values.reduce((sum, value, i) => sum + value * multipliers[i], 0);
    }

    fromDecimal(num) {
        const dd = Math.floor(num / 86400);
        num %= 86400;

        const hh = Math.floor(num / 3600);
        num %= 3600;

        const mm = Math.floor(num / 60);
        const ss = num % 60;

        return `${dd > 0 ? `${dd}d:` : ''}${[hh, mm, ss].map(v => String(v).padStart(2, '0')).join(':')}`;
    }

    formatScoreString(index, name, number){
        return `**#${index + 1}** ${name}, **${this.fromDecimal(number).toLocaleString()}**`;
    }
}
