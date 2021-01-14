import { typeErrorMessage, rangeErrorMessage } from './utils'
import getFactorial from './factorial'

describe('Happy Path', () => {
    test('getFactorial should be a function', () => {
        expect(getFactorial).toBeInstanceOf(Function)
    })
    
    test('getFactorial(3) should return 6', ()=> {
        const actual = getFactorial(3)
        const expected = 6
    
        expect(actual).toBe(expected)
    })
    
    test('getFactorial(4) should return 24', ()=> {
        const actual = getFactorial(4)
        const expected = 24
    
        expect(actual).toBe(expected)
    })
})

describe('Unhappy Path', () => {
    test('getFactorial() should throw a TypeError', () => {
        try {
            getFactorial() 
        } catch ({ name }) {
            expect(name).toBe('TypeError')
        }
    })

    test(`getFactorial() should throw a TypeError with message "${typeErrorMessage}"`, () => {
        try {
            getFactorial() 
        } catch ({ message }) {
            expect(message).toBe(typeErrorMessage)
        }
    })
    
    test('getFactorial(0) should return 1', () =>{
        const actual = getFactorial(0)
        const expected = 1

        expect(actual).toBe(expected)
    })

    test('getFactorial(-1) should throw a Range', () => {
        try {
            getFactorial() 
        } catch ({ name }) {
            expect(name).toBe('TypeError')
        }
    })

    test(`getFactorial(-1) should throw a RangeError with message "${rangeErrorMessage}"`, () => {
        try {
            getFactorial(-1) 
        } catch ({ message }) {
            expect(message).toBe(rangeErrorMessage)
        }
    })
})