"use client"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import '@/components/css/Projets.css'
import { Link1Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

const Project = () => {
  const projects = useSelector(state => state.project);
  const [selected, setSelected] = useState({
    title: "",
    societe: "",
    role: '',
    description: '',
    git: '',
    link: '',
    etat: ''
  });

  useEffect(() => {
    if (projects.length > 0) {
      setSelected(projects[0]);
    }
  }, [projects]);

  const router = useRouter()
  const onChoose = (project) => {
    setSelected(project);
    router.push('/#_detail_projet_')
  };

  /**
   * Animations 
   */
  const { ref, inView } = useInView({
    threshold: [0.3, 1],
  });
  const rightAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(50%)',
    config: { tension: 200, friction: 20 }
  });

  const leftAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)',
    config: { tension: 200, friction: 20 }
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
  });

  return (
    <section ref={ref} className="d-flex flex-column align-items-center justify-content-start col-12" id="_sec3_">
      <animated.div style={fadeIn} className="__titre__ col-12 text-center mt-5">
        Mes Projets
      </animated.div>

      <animated.div className="flex-grow-1 mt-3 col-12 mb-2 mt-2 d-flex flex-column flex-md-row-reverse">

        <animated.div style={leftAnimation} className="d-flex align-items-start justify-content-center m-5 mt-2 mb-2 col-10 col-md-4 __select_projet__">
          <ol style={{ userSelect: "none" }} className="m-0 col-10">
            {projects.map((proj) => (
              <li key={proj.title} onClick={() => onChoose(proj)} className="m-2 p-2 __list_item__">
                <h5>{proj.title}</h5>
              </li>
            ))}
          </ol>
        </animated.div>

        <animated.div style={rightAnimation} id="_detail_projet_" className="m-5 mt-md-2 mb-2 flex-grow-1 d-flex flex-column align-items-center justify-content-between __detail_projet__">
          {selected.title.trim() === '' ? (
            <animated.div className="__no_selection__ col-12 h-100 d-flex align-items-center justify-content-center">
              Veuillez sélectionner un projet à afficher
            </animated.div>
          ) : (
            <>
              <animated.div className="col-11 mt-3">
                <h4>{selected.title}</h4>
                <h6>Societe: {selected.societe}</h6>
                <h6>Mon rôle: {selected.role}</h6>
              </animated.div>
              {selected.description.trim() !== '' && (
                <animated.div className="_descriptioin_ flex-grow-1 col-11 mt-2">
                  {selected.description}
                </animated.div>
              )}
              <animated.div className="col-11 d-flex align-items-center justify-content-between mt-2 __links__ mb-2">
                <animated.div className="h-100 d-flex">
                  {selected.git.trim() !== '' && (
                    <Link target='_blank' href={selected.git} className='text-white text-decoration-none' passHref>
                      <span target="_blank" className="m-2 mt-0 mb-0 d-flex align-items-center _git_">
                        <animated.div className="_link_ico_">
                          <img src="/github.svg" alt="git" />
                        </animated.div>
                        <span className="m-2 mt-0 mb-0">Git</span>
                      </span>
                    </Link>
                  )}
                  {selected.link.trim() !== '' && (
                    <Link target='_blank' className='text-white text-decoration-none' href={selected.link} passHref>
                      <span target="_blank" className="m-2 mt-0 mb-0 d-flex align-items-center _git_">
                        <animated.div className="border _link_ico_ d-flex align-items-center justify-content-center text-white">
                          <Link1Icon></Link1Icon>
                        </animated.div>
                        <span className="m-2 mt-0 mb-0">Lien</span>
                      </span>
                    </Link>
                  )}
                </animated.div>
                {selected.etat.trim() !== '' && (
                  <span className="justify-self-end m-2 mt-0 mb-0">
                    etat : <span className="badge">{selected.etat}</span>
                  </span>
                )}
              </animated.div>
            </>
          )}
        </animated.div>

      </animated.div>
    </section>
  );
};

export default Project;