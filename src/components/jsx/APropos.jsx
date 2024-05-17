import '@/components/css/APropos.css'

const APropos = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-start col-12" id="_sec2_">
      <div className="__titre__ col-12 text-center mt-2">
        Mieux me connaitre
      </div>
      <div className="mt-3 col-12 mt-2 d-flex flex-column flex-md-row">
        <div className="__IMG__ col-0 col-md-5">
          <div className="__me_png__">
            <img src="/me.png" alt="Discover Nuxt 3" />
          </div>
        </div>
        <div className="flex-grow-md-1 d-flex align-items-start justify-content-center">
          <p className="m-3">
            Je suis un développeur Frontend basé à Fianarantsoa, Madagascar, et j'ai acquis ma formation à l'École Nationale d'Informatique (ENI). Spécialisé dans les technologies telles que Next.js(ReactJS) et NuxtJS(VueJS), je suis passionné par la création d'interfaces utilisateur dynamiques et performantes qui captivent et satisfont les utilisateurs.
            <br />
            <br />
            Ma démarche de travail repose sur l'association de la créativité et de la rigueur technique, afin de proposer des solutions innovantes et efficaces. Mon objectif principal est de concevoir des produits numériques centrés sur l'utilisateur, en mettant l'accent sur l'expérience utilisateur (UX) pour garantir une navigation fluide et intuitive.
            <br />
            <br />
            Je suis constamment à la recherche de nouveaux défis et d'opportunités de collaboration qui me permettent d'explorer de nouvelles idées et de contribuer à la création d'expériences numériques exceptionnelles. Si vous cherchez à améliorer votre présence en ligne ou à développer des produits web de qualité, n'hésitez pas à me contacter pour discuter de vos projets et voir comment nous pouvons travailler ensemble pour atteindre vos objectifs numériques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default APropos;