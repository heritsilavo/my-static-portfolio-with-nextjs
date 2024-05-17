import React from 'react';
import '@/components/css/Services.css'

const Service = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-start col-12" id="_sec4_">
      <div className="__titre__ col-12 text-center mt-5">
        Ce que je propose
      </div>
      <div className="mt-3 col-12 mt-2 d-flex justify-content-center">
        <div className="col-11 col-md-6 d-flex flex-column align-items-start justify-content-start">
          En tant que développeur web, je propose des services pour créer des sites web modernes et fonctionnels, adaptés à vos besoins spécifiques. Que vous souhaitiez une refonte de site web, une nouvelle application web ou des conseils pour votre infrastructure en ligne, je suis là pour vous aider.
          <br /><br />

          Développement Frontend: <br />
          <ul>
            <li>Création de sites web attrayants et faciles à utiliser</li>
            <li>Optimisation pour une expérience utilisateur optimale</li>
            <li>Compatibilité avec tous les appareils grâce à un design responsive</li>
          </ul>

          Développement Backend: <br />
          <ul>
            <li>Création de systèmes sécurisés pour stocker et gérer vos données</li>
            <li>Mise en place de solutions cloud pour un fonctionnement fluide</li>
          </ul>
          
          Contactez-moi pour discuter de votre projet et commencer à travailler ensemble dès maintenant.
        </div>
      </div>
    </section>
  );
};

export default Service;
