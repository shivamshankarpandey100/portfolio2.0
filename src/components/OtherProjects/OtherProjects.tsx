import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import React, { useState, useEffect } from 'react';
import './otherProjects.scss';

const OtherProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Other Projects '];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });

  return (
    <div className='other'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='other__container'>
        <h1 className='other__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
      </div>

      <ul className='other__list'>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/PixelVault' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='/icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>PixelVault</div>
              <p className='other__cardBodyDescription'>
              PixelVault is a sleek and user-friendly web-based photo gallery app designed to organize and showcase your favorite moments. Developed using HTML, CSS, JavaScript, and db.js, it ensures smooth performance and efficient data storage for a seamless photography experience.{' '}

              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Html &nbsp; css &nbsp; javascript &nbsp; </div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/hackerrankAutomation' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>HackerrankAutomation</div>
              <p className='other__cardBodyDescription'>
              HackerRankAutomation is a Node.js-based tool designed to streamline the coding challenge process on HackerRank. It automates logging in, running tests, and submitting answers, saving time and enhancing efficiency for developers tackling competitive programming problems.
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Nodejs &nbsp; javascript</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/Jira' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Jira</div>
              <p className='other__cardBodyDescription'>
              Jira is a powerful web-based application designed for project management and issue tracking. Built using HTML, CSS, and JavaScript, it provides teams with intuitive tools to plan, track, and collaborate on projects efficiently, ensuring streamlined workflows and enhanced productivity.</p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> HTML &nbsp; css &nbsp; javascript</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/Web_devlopment/tree/master/Node/fileOrganizer' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>FileOrgnizer</div>
              <p className='other__cardBodyDescription'>
              A System-based File Organizer is a Node.js application designed to automatically sort and organize files on your system. By categorizing files based on type, extension, or custom rules, it helps declutter directories, improves file management, and boosts productivity with seamless automation. </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>  javascript &nbsp; Node js</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a href='https://github.com/shivamshankarpandey100/Web_devlopment/tree/master/Node/espn_scrapper' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/shivamshankarpandey100' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>ESPN Scraper</div>
              <p className='other__cardBodyDescription'>
              The ESPN Scraper is a system-based application built with Node.js to extract and display real-time sports data from the ESPN website. It fetches live scores, player stats, and match details, offering a quick and automated way to stay updated on your favorite sports events.{' '}

              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Nodejs &nbsp; Javascript</div>
            </div>
          </div>
        </li>
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
