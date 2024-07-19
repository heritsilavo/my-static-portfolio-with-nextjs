"use client"
import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { createContext, useContext, useState, useRef, useEffect } from 'react';
export const ShowNavContext = createContext();
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { Circles, LineWave, Rings } from 'react-loader-spinner';

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const getBreakPoints = (width) => {
  if (width >= breakpoints.xl) return 'xl'
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs'
}

export const BreakpoitContext = createContext();
export const LoadingContext = createContext(true)

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const storeRef = useRef(null)
  const toggleShowNav = () => setShowNav(!showNav);
  const [lastScrollValue, setlastScrollValue] = useState(0)

  const [breakpoint, setBreakpoint] = useState()
  useEffect(function () {
    setBreakpoint(getBreakPoints(window.innerWidth))
    const handleResizeScreen = function (event) {
      event.preventDefault();
      setBreakpoint(getBreakPoints(window.innerWidth))
    }
    window.addEventListener('resize', handleResizeScreen);
  }, [])

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      const handleScroll = () => {
        if (rootElement.scrollTop < lastScrollValue) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
        setlastScrollValue(rootElement.scrollTop)
      };

      rootElement.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        rootElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [showNav, lastScrollValue]);

  const [loading, setLoading] = useState(true)
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        {(loading) && <div className="__loding___ d-flex align-items-center justify-content-center"> <LineWave firstLineColor='#0095ff' middleLineColor='#c897ff' lastLineColor='#ff9f4b' /> </div>}
        <LoadingContext.Provider value={[loading, setLoading]}>
          <BreakpoitContext.Provider value={breakpoint}>
            <ShowNavContext.Provider value={{ showNav, toggleShowNav }}>
              <Provider store={storeRef.current}>
                <Layout>{children}</Layout>
              </Provider>
            </ShowNavContext.Provider>
          </BreakpoitContext.Provider>
        </LoadingContext.Provider>
      </body>
    </html>
  )
}