import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import next from "next";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST

const competencesSlices = createSlice({
    name: "competences",
    initialState: {
        current: 0,
        prev: null,
        next: 1,
        list: [
            {
                number: 0,
                title: "Dévéloppement web",
                image: "/Competences/web.png"
            },
            {
                number: 1,
                title: "Programmation",
                image: "/Competences/programmation.png"
            },
            {
                number: 2,
                title: "Méthodologie de dévéloppement",
                image: "/Competences/methode.png"
            },
            {
                number: 3,
                title: "Gestion de version et outils de collaboration",
                image: "/Competences/versionning.png"
            },
            {
                number: 4,
                title: "Outil de gestion de projet",
                image: "/Competences/projet.png"
            },
            {
                number: 5,
                title: "Systeme d'exploitation",
                image: "/Competences/SE.png"
            },

        ]
    },
    reducers: {
        setCurrent(state, action) {
            state.current = action.payload

            if (action.payload >= (state.list.length - 1)) {
                state.next = null
            } else state.next = action.payload + 1

            if (action.payload <= 0) {
                state.prev = null
            } else state.prev = action.payload - 1
        }
    },
    extraReducers: (builder) => {
    }
})

export const { setCurrent } = competencesSlices.actions

export default competencesSlices.reducer