import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL=process.env.NEXT_PUBLIC_API_HOST

const projetSlice=createSlice({
    name:"project",
    initialState:[
        {
            title: "Plateforme de recrutement",
            societe: "webdevin",
            role: "Développeur et implémenter la plateforme",
            description: "Le projet consiste en le développement et l'implémentation d'une plateforme web de classification de CV basée sur l’analyse des critères du poste, destinée aux entreprises souhaitant recruter. Pour les recruteurs, l'application permet de créer et publier des offres d'emploi sur des réseaux sociaux avec un lien pour envoyer les CV, de visualiser les n premiers candidats classifiés par un IA à tout moment, de choisir de partager ou non les résultats de classement avec les candidats, de fixer une date limite pour les candidatures et d'inclure des quiz pour évaluer les compétences des candidats. Pour les candidats, ils peuvent postuler en cliquant sur le lien publié par le recruteur, remplir un formulaire comprenant obligatoirement un CV, une vidéo de présentation d'1 à 3 minutes pour mieux évaluer leurs compétences, répondre aux quiz du recruteur le cas échéant, et fournir une adresse e-mail pour recevoir le retour du classement, recevant en retour un accusé de réception. ",
            git: "https://github.com/heritsilavo/stage_l2",
            link: "",
            etat: "en cours",
        },
        {
            title: "Jeu de memoire",
            societe: "Projet presonel",
            role: "Creer l'application entiere",
            description: "Le jeu de mémoire, également connu sous le nom de “Memory Game”, est un jeu de réflexion addictif qui vous permet de vous amuser tout en entraînant votre mémoire visuelle. Dans ce jeu, vous êtes confronté à un champ de cartes avec des lettres, des chiffres et des figures. Les cartes sont mélangées et retournées face cachée. Lorsque vous cliquez sur deux cartes identiques, elles restent visibles. Votre objectif est de retourner toutes les cartes aussi rapidement que possible. 🃏🧠",
            git: "https://gitlab.com/heritsilavo4835/jeu_de_memoire",
            link: "https://jeu-de-memoire.vercel.app/",
            etat: "en cours",
        },
    
    ],
    reducers:{
    },
    extraReducers:(builder)=>{
    }
})

export const {  } = projetSlice.actions

export default projetSlice.reducer