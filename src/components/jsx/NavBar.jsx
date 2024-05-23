"use client"
import { useContext, useState } from 'react';
import Link from 'next/link';
import { ShowNavContext } from '@/layout';
import 'bootstrap/dist/css/bootstrap.css'
import '@/components/css/NavBar.css'

const NavBar = () => {
  const { showNav, toggleShowNav } = useContext(ShowNavContext)
  const [showvNav, setShowvNav] = useState(false);

  const showhamburger = () => setShowvNav(true);
  const hidehamburger = () => setShowvNav(false);

  return (
    <div onMouseLeave={hidehamburger} className={`d-flex align-items-center justify-content-between __nav_container__ ${showNav ? '' : '__hide_nav__'}`}>
      <div className="__logo__">HERITSILAVO</div>
      <img onMouseEnter={showhamburger} className="d-inline-block d-md-none __bars__" src="/barswhite.svg" alt="bars" />

      <div className={`col-12 __v_nav_ ${showvNav ? '' : ' _not_show_ '}`}>
        <ul className="m-0">
          <li className="m-2 col-4">
            <Link href="/#_sec1_" passHref>
              <span className="col-12">Accueil</span>
            </Link>
          </li>
          <li className="m-2 col-4">
            <Link href="/#_sec2_" passHref>
              <span className="col-12">A propos</span>
            </Link>
          </li>
          <li className="m-2 col-4">
            <Link href="/#_sec5_" passHref>
              <span className="col-12">Competences</span>
            </Link>
          </li>
          <li className="m-2 col-4">
            <Link href="/#_sec3_" passHref>
              <span className="col-12">Mes Projets</span>
            </Link>
          </li>
          <li className="m-2 col-4">
            <Link href="/#_sec4_" passHref>
              <span className="col-12">Mes services</span>
            </Link>
          </li>
          <li className="col-10 mb-2">
            <a href="/cv.pdf" download>
              <button className="btn btn-success __acc_txt__">Télécharger CV</button>
            </a>
          </li>
        </ul>
      </div>

      <ul className="d-none d-md-inline-block m-0">
        <li>
          <Link href="/#_sec1_" passHref>
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec2_" passHref>
            <span>A propos</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec5_" passHref>
            <span>Competences</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec3_" passHref>
            <span>Projets</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec4_" passHref>
            <span>Services</span>
          </Link>
        </li>
      </ul>
      <a className="d-none d-md-inline-block" href="/cv.pdf" download>
        <button className="btn btn-success __acc_txt__">Télécharger CV</button>
      </a>
    </div>
  );
};

export default NavBar;
