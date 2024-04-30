export default class {
  constructor(){
    this.diffrence = 1
    this.startingNum = 1
    this.wordsToNumbersEnabled = false;
    this.mathEnabled = false;
    this.name = "letters"
  }

  toDecimal(num) {
    if (!/^[a-zA-Z]+$/g.test(num)) return
    const input = num.toUpperCase().split("")
    return input.map((letter, index) => (letter.charCodeAt(0) - 64) * (Math.pow(26, input.length - (index + 1)))).reduce((a, b) => a + b)
  }

  fromDecimal(num) {
    let s = []

    while (num > 0) {
      let t = (n - 1) % 26;
      s.unshift(String.fromCharCode(65 + t))
      num = (num - t) / 26 | 0;
    }
  
    return s.join("");
  }

  formatScoreString(index, name, number) {
    return `**#${index + 1}** ${name}, **${number}**`
  }    
}