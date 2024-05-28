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
      <div className="d-none d-md-inline __logo__">HERITSILAVO</div>
      <ul className="d-none d-md-inline-block m-1 mt-0 mb-0">
        <li>
          <Link href="/#_sec1_" passHref>
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec2_" passHref>
            <span>Profil</span>
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


      <div className={`col-12 __v_nav_ d-md-none ${showNav ? '' : ' __hide_v_nav__ '} `}>
        <ul className="m-0 col-12">
          <li className="m-2">
            <Link href="/#_sec1_" passHref>
              <span className="col-12">Accueil</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec2_" passHref>
              <span className="col-12">Profil</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec5_" passHref>
              <span className="col-12">Competences</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec3_" passHref>
              <span className="col-12">Projets</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec4_" passHref>
              <span className="col-12">Services</span>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;
