import {calculateRateRange, calcWords, extractTextFromWikiPages, checkRank} from "./index";
import {PagesWiki} from "../reducers/types";

const mockString: PagesWiki = {
    '1231': {
        pageid: 0,
        ns:0,
        title: 'Test',
        extract: '<p>test, test: </p>'
    }
}

const mockValues = [0, 1, 20, 30, 30, 25, 100]

describe('functions', () => {
    test('extractTextFromWikiPages() tests', () => {
        expect(extractTextFromWikiPages(mockString)).toBe('test test')
    })

    test('calcWords() tests', () => {
        const mockTextArr = extractTextFromWikiPages(mockString).split(' ').filter(Boolean)
        expect(calcWords(mockTextArr)).toEqual(new Map([['test', 2]]))
    })

    test('calculateRateRange() tests', () => {
        expect(calculateRateRange(mockValues)).toEqual([20,40,60,80,100])
    })

    test('checkRank() tests', () => {
        const mockRank = calculateRateRange(mockValues)
        expect(checkRank(2, mockRank)).toBe(1)
        expect(checkRank(100, mockRank)).toBe(5)
    })
})