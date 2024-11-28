import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img className='project__img' src='https://res.cloudinary.com/dalh72jnz/image/upload/e_improve:outdoor:80/portfolio2/hft4o9dbjjp1erlytbbz' alt='CodeChat' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://github.com/shivamshankarpandey100/chat-app' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>CodeChat</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              This chat app, built with Express.js, React.js, Node.js, MongoDB, and SCSS/SASS, offers real-time communication with fast server-side rendering, interactive UI, and efficient backend processing. MongoDB ensures secure data storage, while SCSS/SASS enhances the design with a modern, user-friendly interface. It is a reliable and scalable solution designed to make communication seamless and engaging.
              </p>
              <div className='project__tags'> Express.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Socket.io &nbsp; Redux &nbsp; SCSS/SASS</div>
              <div className='project__icons'>
                <a href='https://github.com/shivamshankarpandey100/chat-app' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100/chat-app' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://github.com/shivamshankarpandey100/Calculator' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Calculator</h2></a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
              This web-based calculator, built with HTML, CSS, and JavaScript, offers a clean and responsive interface for quick calculations. JavaScript handles the logic, allowing for accurate operations like addition, subtraction, multiplication, and division. The design, styled with CSS, ensures a smooth and user-friendly experience.
                {' '}

              </p>
              <div className='project__tags'>
                HTML5 &nbsp;
                CSS3 &nbsp; JavaScript 
                {' '}

              </div>
              <div className='project__icons project__icons1'>
                <a href='https://github.com/shivamshankarpandey100/Calculator' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://calculator-pi-bice.vercel.app/' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img className='project__img' src='https://res.cloudinary.com/dalh72jnz/image/upload/e_improve:outdoor:80/portfolio2/svzgfjvlqzyw2lgzfbeu' alt='Calculator' />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img className='project__img' src='https://res.cloudinary.com/dalh72jnz/image/upload/e_improve:outdoor:80/portfolio2/dm9ofoedyzqs0x8j3mwu' alt='Adminify' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://github.com/shivamshankarpandey100/adminpanel-react-materialUI' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Adminify</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              This admin panel, built with React.js, Material-UI, Redux, and Spring Boot (Java), provides a responsive and interactive interface for efficient data management. React.js ensures dynamic UI, Material-UI delivers a modern design, and Redux handles smooth state management. The Spring Boot backend ensures scalability and secure data processing.
              </p>
              <div className='project__tags'> Java &nbsp; SpringBoot &nbsp; Telwind-Css &nbsp;Reactjs&nbsp; Redux</div>
              <div className='project__icons'>
                <a href='https://github.com/shivamshankarpandey100/adminpanel-react-materialUI' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100/adminpanel-react-materialUI' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/chat-app' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='#' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>CodeChat</div>
              <p className='projectResp__cardBodyDescription'>
              This chat app, built with Express.js, React.js, Node.js, MongoDB, and SCSS/SASS, offers real-time communication with fast server-side rendering, interactive UI, and efficient backend processing. MongoDB ensures secure data storage, while SCSS/SASS enhances the design with a modern, user-friendly interface. It is a reliable and scalable solution designed to make communication seamless and engaging.
              </p>
              {' '}

            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Express.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Socket.io &nbsp; Redux &nbsp; SCSS/SASS</div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/Calculator' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100/Calculator' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Calculator</div>
              <p className='projectResp__cardBodyDescription'>
              This web-based calculator, built with HTML, CSS, and JavaScript, offers a clean and responsive interface for quick calculations. JavaScript handles the logic, allowing for accurate operations like addition, subtraction, multiplication, and division. The design, styled with CSS, ensures a smooth and user-friendly experience.
              
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                Html5 &nbsp;
                Css3 &nbsp; javaScript 

              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/adminpanel-react-materialUI' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100/adminpanel-react-materialUI' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Adminify</div>
              <p className='projectResp__cardBodyDescription'>
              This admin panel, built with React.js, Material-UI, Redux, and Spring Boot (Java), provides a responsive and interactive interface for efficient data management. React.js ensures dynamic UI, Material-UI delivers a modern design, and Redux handles smooth state management. The Spring Boot backend ensures scalability and secure data processing.
              

              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Java &nbsp; SpringBoot &nbsp; Telwind-Css &nbsp;Reactjs&nbsp; Redux</div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>

    </div>
  );
};

export default Project;
