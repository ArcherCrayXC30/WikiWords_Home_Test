/**
 *
 * @param func
 * @param delay
 */
import {PagesWiki} from "../reducers/types";

/**
 *
 * @param func
 * @param delay
 */
export const debounce = (func: Function, delay = 500) => {
    let timerId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), delay);
    };
};

/**
 *
 * @param resp
 */
export const extractTextFromWikiPages = (resp: PagesWiki): string => {
    return Object.keys(resp).map(key => {
        return resp[key].extract || []
    })
        .join(' ')
        .replace(/(<[^>]*>?)|([.,()":'])/gm, '')
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .trim()
}

/**
 *
 * @param textArr
 */
export const calcWords = (textArr: string[]): Map<string, number> => {
    const reduceArr: Map<string, number> = new Map()
    textArr.forEach(word => {
        const counter = reduceArr.get(word.toLowerCase()) || 0
        reduceArr.set(word.toLowerCase(), counter + 1)
    })
    return new Map([...reduceArr.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

export const calculateRateRange = (arr: number[]): number[] => {
    const uniqValues = Array.from(new Set(arr))
    const max = Math.max(...uniqValues)
    const min = Math.min(...uniqValues)
    const len = (max - min) / 5
    const ranges = []
    for (let i = 1; i < 6; i++) {
        ranges.push(min+i*len)
    }
    return ranges
}

export const checkRank = (val: number, ranks: number[]): number => {
    return ranks.findIndex(elem => val <= elem) + 1
}


