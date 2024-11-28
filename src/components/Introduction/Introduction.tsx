import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Shivam,'];
  const jobArray = [...'oftware enginner'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
&nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
&nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <img src='https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png' className='intro__logos' alt='' />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          
        </h1>
        <h2 className='intro__headingSecondary'>Full Stack Developer / Software Engineer</h2>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='intro__right'>
        <div className='logo__outline'>
            {/* <svg
        id="shivam"
        width="50.2rem"
        height="49.7rem"
        viewBox="0 0 287 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <defs>
          <linearGradient id="outer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFD700" />
            <stop offset="50%" stop-color="#FF4500" />
            <stop offset="100%" stop-color="#FF1493" />
          </linearGradient>
        </defs>

        
        <path
          d="M200 30
            C 60 30, 60 140, 150 140
            C 240 140, 240 250, 80 250"
          stroke="url(#outer-gradient)"
          stroke-width="12"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0,500"
            to="500,0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        
        <defs>
          <linearGradient id="inner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00BFFF" />
            <stop offset="50%" stop-color="#7CFC00" />
            <stop offset="100%" stop-color="#FFD700" />
          </linearGradient>
        </defs>

        
        <path
          d="M190 50
            C 80 50, 80 130, 150 130
            C 220 130, 220 230, 100 230"
          fill="url(#inner-gradient)"
          opacity="0.95"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        
        <path
          d="M195 35
            C 65 35, 65 145, 155 145
            C 245 145, 245 255, 85 255"
          stroke="#FFFFFF"
          stroke-width="5"
          opacity="0.6"
          fill="none"
          stroke-dasharray="10, 20"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 143.5 143.5"
            to="360 143.5 143.5"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

      
        <path
          d="M205 35
            C 65 35, 65 145, 155 145
            C 245 145, 245 255, 85 255"
          stroke="#115173"
          stroke-width="18"
          opacity="0.15"
          fill="none"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.1;0.2"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
    </svg> */}

<svg
  id="shivam"
  width="50.2rem"
  height="49.7rem"
  viewBox="0 0 287 287"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="outer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#115173" />
    </linearGradient>
    <linearGradient id="inner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00BFFF" />
      <stop offset="50%" stop-color="#7CFC00" />
      <stop offset="100%" stop-color="#FFD700" />
    </linearGradient>
  </defs>

  <path
    d="M200 30
       C 60 30, 60 140, 150 140
       C 240 140, 240 250, 80 250"
    stroke="url(#outer-gradient)"
    stroke-width="10"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <animate
      attributeName="stroke-dasharray"
      from="0,700"
      to="700,0"
      dur="2s"
      begin="0.5s"
      repeatCount="indefinite"
    />
  </path>

  <path
    d="M190 50
       C 80 50, 80 130, 150 130
       C 220 130, 220 230, 100 230"
    fill="url(#inner-gradient)"
    opacity="0.9"
  >
    <animate
      attributeName="opacity"
      values="0.8;1;0.8"
      dur="3s"
      repeatCount="indefinite"
    />
  </path>

  <path
    d="M205 35
       C 65 35, 65 145, 155 145
       C 245 145, 245 255, 85 255"
    stroke="#000000"
    stroke-width="15"
    opacity="0.15"
    fill="none"
  >
    <animate
      attributeName="opacity"
      values="0.1;0.2;0.1"
      dur="3s"
      repeatCount="indefinite"
    />
  </path>

  <path
    d="M195 35
       C 65 35, 65 145, 155 145
       C 245 145, 245 255, 85 255"
    stroke="#FFFFFF"
    stroke-width="3"
    fill="none"
    stroke-dasharray="20,30"
  >
    <animateTransform
      attributeName="transform"
      type="scale"
      from="1"
      to="1.05"
      dur="3s"
      repeatCount="indefinite"
      additive="sum"
    />
  </path>
</svg>


        </div>
      </div>
    </div>
  );
};

export default Introduction;
