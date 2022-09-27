const assert = require("assert")

function convert(inputNum){
    if (inputNum === 5){
        return "V"
    }
    if (inputNum === 4){
        return "IV"
    }

    let output = ""
    for (let i = 0; i < inputNum; i++) {
        output += "I"
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
    ].forEach(({input, expected}) => {
        it(`should convert ${input} into ${expected}`, function () {
            assert.strictEqual(convert(input), expected)
        });
    })
})