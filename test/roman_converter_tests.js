const assert = require("assert")

function convert(inputNum){
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
    ].forEach(({input, expected}) => {
        it(`should convert ${input} into ${expected}`, function () {
            assert.strictEqual(convert(input), expected)
        });
    })
})