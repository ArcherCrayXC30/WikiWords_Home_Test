import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {AppData, ResponseWiki } from "./types";
import {AppThunk} from "../store/store";
import {fetchWikiData} from "../service";
import {calculateRateRange, calcWords, extractTextFromWikiPages} from "../helpers";


const initialState: AppData = {
    response: null,
    wordsMap: null,
    stripped: '',
    status: "INVALID",
    ranks: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        resetState: (state) => {
            state.status = 'INVALID'
            state.ranks = []
            state.wordsMap = null
            state.stripped = ''
            state.response = null
        },

        getFailure: (state, { payload }: PayloadAction<string>) => {
            state.status = 'FAILURE'
            state.error = payload
        },

        getRequesting: (state) => {
            state.status = "REQUEST"
        },

        getSuccess: (state, {payload}: PayloadAction<ResponseWiki>) => {
            const { query: { pages } } = payload
            state.stripped = extractTextFromWikiPages(pages)
            const temp = state.stripped.toLowerCase().split(' ').filter(Boolean)
            if (temp.length) {
                state.wordsMap = calcWords(temp)
                state.ranks = calculateRateRange([...state.wordsMap.values()])
            } else {
                state.wordsMap = null
                state.ranks = []
            }
            state.response = payload
            state.status = 'SUCCESS'
        }
    }
})

export default dataSlice.reducer

export const {
    getFailure,
    getRequesting,
    getSuccess,
    resetState
} = dataSlice.actions

export const getTextFromWiki = (params: string): AppThunk => async (dispatch) => {
    dispatch(getRequesting())
    const {data, error} = await fetchWikiData(params)

    if (error) {
        dispatch(getFailure(error.message))
    } else if ( data && Object.keys(data.query.pages).includes('-1')) {
        dispatch(getFailure('Empty query result'))
    }
    else if (data) {
        dispatch(getSuccess(data))
    }
}