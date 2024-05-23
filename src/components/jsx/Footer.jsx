import Link from 'next/link';
import '@/components/css/Footer.css'

const Footer = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-between __footer_container__">
      <div className="d-flex flex-column align-items-center justify-content-end col-12 flex-grow-1">
        <div className="m-2 col-12 flex-wrap d-flex align-items-center justify-content-between">
          <span className="m-2 badge">
            <span>Email :</span>
            <span>heritsilavo4835@gmail.com</span>
          </span>
          <span className="m-2 badge">
            <span>Tél :</span>
            <span>+261342631778 / +261328007119</span>
          </span>
          <span className="m-2 badge">
            <span>Linkedin :</span>
            <span>heritsilavo ANDRIANTSILAVINA</span>
          </span>
          <span className="m-2 badge">
            <span>Facebook :</span>
            <span>heritsilavo ANDRIANTSILAVINA</span>
          </span>
        </div>

        <div className="m-2 col-12 d-none d-md-flex align-items-start justify-content-center">
          <Link href="/#_sec2_" passHref>
            <p className="badge m-2 p-2 __footer_menu_link__">A propos de moi</p>
          </Link>
          <Link href="/#_sec3_" passHref>
            <p className="badge m-2 p-2 __footer_menu_link__">Mes projets</p>
          </Link>
          <Link href="/#_sec4_" passHref>
            <p className="badge m-2 p-2 __footer_menu_link__">Mes services</p>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center col-12 mb-4">
        <div className="col-10 col-sm-8 col-md-4 col-lg-3 mt-1 border"></div>
        Edité par Heritsilavo le 2024
      </div>
    </div>
  );
};

export default Footer;
