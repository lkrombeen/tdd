const assert = require("assert")
const [convertToRoman, convertToInt] = require("../src/roman_converter")

describe("All tests", () => {
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
            {input: 40, expected: "XL"},
            {input: 50, expected: "L"},
            {input: 89, expected: "LXXXIX"},
            {input: 90, expected: "XC"},
            {input: 100, expected: "C"},
            {input: 400, expected: "CD"},
            {input: 500, expected: "D"},
            {input: 900, expected: "CM"},
            {input: 1000, expected: "M"},
            {input: 3999, expected: "MMMCMXCIX"},
        ].forEach(({input, expected}) => {
            it(`should convert ${input} into ${expected}`, () => {
                assert.strictEqual(convertToRoman(input), expected)
            });
        })
    })

    describe('Converts romans into numbers', () => {
        it('should return 0 for an empty string', function () {
            assert.strictEqual(0, convertToInt(""))
        });

        [
            {numberValue: 1, romanValue: "I"},
            {numberValue: 2, romanValue: "II"},
            {numberValue: 3, romanValue: "III"},
            {numberValue: 4, romanValue: "IV"},
            {numberValue: 5, romanValue: "V"},
            {numberValue: 6, romanValue: "VI"},
            {numberValue: 7, romanValue: "VII"},
            {numberValue: 8, romanValue: "VIII"},
            {numberValue: 9, romanValue: "IX"},
            {numberValue: 10, romanValue: "X"},
            {numberValue: 40, romanValue: "XL"},
            {numberValue: 50, romanValue: "L"},
            {numberValue: 89, romanValue: "LXXXIX"},
            {numberValue: 90, romanValue: "XC"},
            {numberValue: 100, romanValue: "C"},
            {numberValue: 400, romanValue: "CD"},
            {numberValue: 500, romanValue: "D"},
            {numberValue: 900, romanValue: "CM"},
            {numberValue: 1000, romanValue: "M"},
            {numberValue: 3999, romanValue: "MMMCMXCIX"},
        ].forEach(({numberValue, romanValue}) => {
            it(`should convert ${numberValue} into ${romanValue}`, () => {
                assert.strictEqual(convertToInt(romanValue), numberValue)
            });
        })
    })

    describe("It should convert all the things", () => {
        for (let i = 0; i < 4000; i++) {
            it(`Should convert back and forth ${i}`, () => {
                assert.strictEqual(convertToInt(convertToRoman(i)), i)
            })
        }
    })
})