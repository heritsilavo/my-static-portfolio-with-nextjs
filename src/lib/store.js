import projetReducer from '@/lib/features/projet/projet'
import competencesReducer from '@/lib/features/competences/competences'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    project: projetReducer,
    competences: competencesReducer
})

export const makeStore = () => configureStore({
    reducer: rootReducer
})