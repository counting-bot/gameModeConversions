const modes = {
    0: "whole",
    1: "decimal",
    2: "binary",
    3: "letters",
    4: "hex",
    5: "2",
    6: "5",
    7: "10",
    8: "100",
    9: "roman"
}

const diffMap = new Map(
    await Promise.all(
        Object.entries(modes).map(async([difficulty, fileName]) => [difficulty, await import(`./modes/${fileName}.mjs`)])
    )
);

export const getMode = (difficulty) => diffMap.get(difficulty.toString())

export const validModes = modes;

export const modeChoices = Object.entries(modes).map(([value, name]) => {
    return {name, value}
})