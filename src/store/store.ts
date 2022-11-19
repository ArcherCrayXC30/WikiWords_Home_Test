import {Action, combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk'
import dataSlice from "../reducers/data";

const rootReducer = combineReducers({
    user: dataSlice
})

export function setupStore(preloadState?: PreloadedState<AppState>) {
    return configureStore({
        reducer: {
            data: dataSlice
        },
        devTools: process.env.NODE_ENV === 'development',
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                serializableCheck: false
            }
        )
    })
}

export const store = setupStore()

export type AppState = ReturnType<typeof store.getState>

export type AppStore = ReturnType<typeof setupStore>

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>