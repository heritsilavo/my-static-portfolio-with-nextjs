import dynamic from 'next/dynamic'
import Accueil from '@/components/jsx/Acceuil'
import APropos from '@/components/jsx/APropos'
import Project from '@/components/jsx/Projets'
import Service from '@/components/jsx/Services'
import Footer from '@/components/jsx/Footer'
import NavBar from '@/components/jsx/NavBar'
import { Suspense } from 'react'
import Competences from '@/components/jsx/Competences'


export const metadata = {
  title: 'Heritsilavo'
}

export default function Page() {
  return (
    <>
      <NavBar></NavBar>
      <Accueil></Accueil>
      <APropos></APropos>
      <Project></Project>
      <Competences></Competences>
      <Service></Service>
      <Footer></Footer>
    </>
  )
}
