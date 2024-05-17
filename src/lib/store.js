import projetReducer from '@/lib/features/projet/projet'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer=combineReducers({
    project:projetReducer
})

export const makeStore=()=>configureStore({
    reducer:rootReducer
})