import Link from 'next/link';
import '@/components/css/Acceuil.css'

const Accueil = () => {
  return (
    <section className="d-flex flex-column flex-md-row align-items-center justify-content-evenly col-12" id="_sec1_">
      <div className="flex-grow-1 h-75 m-2 __acceuil_1__">
        <h1 className="mt-5 mb-0 __acc_txt__ _64px_">Bonjour,</h1>
        <h1 className="mt-2 mb-0 __acc_txt__ _64px_">Je suis Tsilavo</h1>
        <h1 className="mt-2 mb-0 __acc_txt__ _32px_">Developpeur web fullstack</h1>
        <h1 className="mt-4 mb-0 __acc_txt__ _24px_">"Construisons votre avenir numerique ligne par ligne"</h1>
      </div>
      <div className="col-12 col-md-5 h-50 h-md-100 __acceuil_2__"></div>
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
