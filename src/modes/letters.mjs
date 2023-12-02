export const toDecimal = l => {
    if (!/^[a-zA-Z]+$/g.test(l)) return
    const input = l.toUpperCase().split("")
    return input.map((letter, index) => (letter.charCodeAt(0) - 64) * (Math.pow(26, input.length - (index + 1)))).reduce((a, b) => a + b)
}

export const fromDecimal = n => {
    let s = []

    while (n > 0) {
      let t = (n - 1) % 26;
      s.unshift(String.fromCharCode(65 + t))
      n = (n - t) / 26 | 0;
    }

    return s.join("");
}

export const diffrence = 1

export const startingNum = 1

export const wordsToNumbersEnabled = false;

export const mathEnabled = false;

export const name = "letters"

export const formatScoreString = (index, name, number) => `**#${index + 1}** ${name}, **${number}**`;