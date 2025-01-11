import {calculatePasswordStrength} from "../src/Password";

describe("Various passwords tests", () => {

    test("the password is = 7", () => {
        expect(calculatePasswordStrength("1234567")).toBe("Very Weak")
    })
    test("the password is precisely 8 digits", () => {
        expect(calculatePasswordStrength("12345678")).toBe("Very Weak")

    })
    test("Uppercase letters + lowercase = 11", () => {
        expect(calculatePasswordStrength("ABCDEFGHIjk")).toBe("Weak")

    })
    test("Uppercase letters + lowercase + digits = 11", () => {
        expect(calculatePasswordStrength("ABC123def32")).toBe("Moderate")


    })
    test("A very long password:Uppercase + special characters + digits", () => {
        expect(calculatePasswordStrength("AKFJASFUQWRQWIUYFASUIYASF@#!$3323")).toBe("Strong")


    })
    test("A very weak password", () => {
      expect(calculatePasswordStrength("123")).toBe("Very Weak")

    })
    test("A weak password", () => {
        expect(calculatePasswordStrength("ABCDERG3451")).toBe("Weak")

    })
    test("A moderate password", () => {
        expect(calculatePasswordStrength("12ABCDERG34513")).toBe("Moderate")

    })
    test("A strong password", () => {
        expect(calculatePasswordStrength("12ABCD#$$ERG34513")).toBe("Strong")

    })
    test("Negative scenario: an empty password", () => {
        expect(calculatePasswordStrength("")).toBe("Very Weak")

    })
    test("Negative scenario: only special characters", () => {
        expect(calculatePasswordStrength("$!@###%%@")).toBe("Very Weak")

    })

})