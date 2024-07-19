'use client'
import Link from 'next/link';
import '@/components/css/Acceuil.css'
import { Suspense, useContext, useState, useEffect } from 'react'
import dynamic, { noSSR } from 'next/dynamic';
import { BreakpoitContext } from '@/layout';
import { OrbitControls } from '@react-three/drei'

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='d-flex h-100 col-12 flex-column align-items-center justify-content-center'>
      <svg className='m-3 h-5 w-5  text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const MonLogo = dynamic(() => import('@/components/jsx/MonLogo').then((mod) => mod.MonLogo), { ssr: false })

const Accueil = () => {
  const [windowWidth, setWindowWidth] = useState()
  useEffect(() => { setWindowWidth(window.innerWidth) }, [])
  useEffect(function () {
    const onResizeWindow = function (event) {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResizeWindow)
    return () => { window.removeEventListener('resize', onResizeWindow) }
  }, [])

  return (
    <section style={{ userSelect: "none", MozUserSelect: "-moz-none" }} className="d-flex flex-column flex-md-row align-items-center justify-content-evenly col-12" id="_sec1_">

      {/**768 970
       * Ref taille > sm (GRAND ECRAN)
       */}
      <div style={{ paddingLeft: ((windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "10px" : "40px") : "60px") }} className="d-none d-sm-inline-block flex-grow-1 h-75 m-2 __acceuil_1__">
        <h1 style={{ fontSize: ((windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "50px" : "60px") : "72px") }} className="mt-5 mb-0 __acc_txt__ ">Bonjour,</h1>
        <h1 style={{ fontSize: ((windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "50px" : "60px") : "72px") }} className="mt-2 mb-0 __acc_txt__ ">Je suis Tsilavo</h1>
        <h1 style={{ fontSize: ((windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "25px" : "30px") : "40px") }} className="mt-2 mb-0 __acc_txt__ ">Developpeur web fullstack</h1>
        <h1 style={{ fontSize: ((windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "15px" : "20px") : "24px") }} className="mt-4 mb-0 __acc_txt__ ">"Construisons votre avenir numerique ligne par ligne"</h1>
        <a href="/Heritsilavo ANDRIANTSILAVINA.pdf" className='mt-4 mb-0 __acc_txt__ btn btn-success' download>Telecharger CV </a>
      </div>

      { /**
        * Refa taille < sm (PETIT ECRAN)
        * */ }
      <div className="d-inline-block d-sm-none flex-grow-1 h-75 m-2 mt-5 __acceuil_1__">
        <h1 style={{ fontSize: "45px" }} className="mt-5 mb-0 __acc_txt__">Bonjour,</h1>
        <h1 style={{ fontSize: "45px" }} className="mt-2 mb-0 __acc_txt__">Je suis Tsilavo</h1>
        <h1 style={{ fontSize: "23px" }} className="mt-2 mb-0 __acc_txt__">Developpeur web fullstack</h1>
        <h1 style={{ fontSize: "15px" }} className="mt-4 mb-0 __acc_txt__">"Construisons votre avenir numerique ligne par ligne"</h1>
        <a href="/Heritsilavo ANDRIANTSILAVINA.pdf" className='shadow-lg mt-4 mb-0 __acc_txt__ btn btn-success' download>Telecharger CV </a>
      </div>

      {
        /**
         * Logo HT
         */
      }
      <div className={` col-12 position-relative col-md-5 __acceuil_2__` + ((windowWidth < 1300) ? ' h-50 ' : ' h-75 ')}>
        <View orbitControls={<OrbitControls enableZoom={false} />} className='h-100 col-12 d-flex flex-column align-items-center justify-content-center'>
          <Suspense fallback={null}>
            <MonLogo></MonLogo>
            <Common color={"#12092D"}></Common>
          </Suspense>
        </View>
      </div>

      {
        /**
         * Barre des sociales
         */
      }
      <div className="d-none d-md-flex flex-column justify-content-between align-items-center __socials__">
        <Link href="https://www.facebook.com/her.tslav/" target="_blank">
          <div className="rounded m-3 __socials_item__">
            <img src="/facebook.svg" alt="facebook" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/heritsilavo-andriantsilavina-86b4302b4/?originalSubdomain=mg" target="_blank">
          <div className="rounded m-3 __socials_item__">
            <img src="/linkedin.svg" alt="linkedin" />
          </div>
        </Link>
        <Link href="https://github.com/heritsilavo" target="_blank">
          <div className="rounded m-3 __socials_item__">
            <img src="/github.svg" alt="github" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Accueil;
