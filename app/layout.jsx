"use client"
import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { createContext, useContext, useState, useRef, useEffect } from 'react';
export const ShowNavContext = createContext();
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const storeRef = useRef(null)
  const toggleShowNav = () => setShowNav(!showNav);
  const [lastScrollValue, setlastScrollValue] = useState(0)

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

  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <ShowNavContext.Provider value={{ showNav, toggleShowNav }}>
          <Provider store={storeRef.current}>
            <Layout>{children}</Layout>
          </Provider>
        </ShowNavContext.Provider>
      </body>
    </html>
  )
}