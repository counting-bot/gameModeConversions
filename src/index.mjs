import two from './modes/2.mjs'
import five from './modes/5.mjs'
import ten from './modes/10.mjs'
import hundred from './modes/100.mjs'
import binary from './modes/binary.mjs'
import decimal from './modes/decimal.mjs'
import hex from './modes/hex.mjs'
import letters from './modes/letters.mjs'
import roman from './modes/roman.mjs'
import whole from './modes/whole.mjs'

const modes = {
    0: whole,
    1: decimal,
    2: binary,
    3: letters,
    4: hex,
    5: two,
    6: five,
    7: ten,
    8: hundred,
    9: roman
}

const diffMap = new Map(
    await Promise.all(
        Object.entries(modes).map(async([difficulty, converter]) => [difficulty, converter])
    )
);

export const getMode = (difficulty) => diffMap.get(difficulty.toString())

export const validModes = modes;

export const modeChoices = Object.entries(modes).map(([value, name]) => {
    return {name, value}
})