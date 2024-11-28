import React from 'react';
import './leftSidebar.scss';

const LeftSideBar = () => (
  <div className='left'>
    <main className='left__main'>
      <ul className='left__social'>
        <li className='left__linkItems'>
          <a href='https://www.youtube.com/channel/UCPnN_xN1ZiGZWLge4m8Bp_g' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='icons/symbol-defs.svg#icon-youtube' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-codepen' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://github.com/shivamshankarpandey100' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-github' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://www.instagram.com/blank_life_30863/' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-instagram' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://www.linkedin.com/in/shivamsp100' target='_blank' rel='noreferrer' className='left__links'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-linkedin' />
            </svg>
          </a>
        </li>
      </ul>
      <div className='left__line' />
    </main>
  </div>
);

export default LeftSideBar;
