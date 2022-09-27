const assert = require("assert")

function convert(inputNum){
    let output = "";

    let romanNumerals = ["V", "IV", "I"];
    let romansMapped = [5, 4, 1];

    let index = 0;
    while (inputNum > 0) {
        const mappedVal = romanNumerals[index];
        const mappedNum = romansMapped[index];
        if (inputNum >= mappedNum){
            inputNum -= mappedNum;
            output += mappedVal
        }
        else {
            index += 1
        }
    }

    return output
}

describe("Converts integers into roman numbers", () => {
    [
        {input: 1, expected: "I"},
        {input: 2, expected: "II"},
        {input: 3, expected: "III"},
        {input: 4, expected: "IV"},
        {input: 5, expected: "V"},
        {input: 6, expected: "VI"},
    ].forEach(({input, expected}) => {
        it(`should convert ${input} into ${expected}`, function () {
            assert.strictEqual(convert(input), expected)
        });
    })
})