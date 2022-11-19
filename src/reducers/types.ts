
export interface AppData {
    response: ResponseWiki | null,
    stripped: string,
    wordsMap: Map<string, number> | null
    status: 'FAILURE' | 'REQUEST' | 'INVALID' | 'SUCCESS'
    error?: string
    ranks: number[]
}

export interface PageWiki {
    pageid: number
    ns: number
    title: string
    extract: string
}

export interface PagesWiki {
    [key: string]: PageWiki
}

export interface QueryWiki {
    pages: PagesWiki
}

export interface ResponseWiki {
    batchcomplete: string,
    warnings?: { extracts: { ['*']: string } }
    query: QueryWiki
}