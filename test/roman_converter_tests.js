const assert = require("assert")
const [convert] = require("../src/roman_converter")

describe("Converts integers into roman numbers", () => {
    [
        {input: 1, expected: "I"},
        {input: 2, expected: "II"},
        {input: 3, expected: "III"},
        {input: 4, expected: "IV"},
        {input: 5, expected: "V"},
        {input: 6, expected: "VI"},
        {input: 7, expected: "VII"},
        {input: 8, expected: "VIII"},
        {input: 9, expected: "IX"},
        {input: 10, expected: "X"},
        {input: 50, expected: "L"},
        {input: 89, expected: "LXXXIX"},
        {input: 90, expected: "XC"},
        {input: 100, expected: "C"},
        {input: 500, expected: "D"},
        {input: 900, expected: "CM"},
        {input: 1000, expected: "M"},
        {input: 3999, expected: "MMMCMXCIX"},
    ].forEach(({input, expected}) => {
        it(`should convert ${input} into ${expected}`, () => {
            assert.strictEqual(convert(input), expected)
        });
    })
})