import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Contact me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  const form = useRef<HTMLFormElement>(null);

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs.sendForm('service_5ojtqbe', 'template_dvapdye', form.current, 'IpAKOf6muTtHbooRk')
        .then(() => {
          window.alert('Mail Sent Successfully!!!');
        }, (error) => {
          window.alert('Mail Not Sent!!!');
        });
    }

    if (inputRef1.current !== null) inputRef1.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
    if (inputRef3.current !== null) inputRef3.current.value = '';
  };

  return (
    <div className='contact'>
      <div className='contact__left'>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <p className='contact__description'>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don&apos;t hesitate to contact me using below form either.
        </p>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input name='user_name' ref={inputRef1} type='text' className='form__input' id='name' placeholder='Full Name' required />
              <label htmlFor='name' className='form__label'>Full Name</label>
            </div>
            <div className='form__group'>
              <input type='email' ref={inputRef2} name='user_email' className='form__input' id='email' placeholder='Enter Your Email Address' required />
              <label htmlFor='email' className='form__label'>Email Address</label>
            </div>
            <div className='form__group'>
              <textarea name='message' ref={inputRef3} className='form__input' id='message' placeholder='Message' required />
              <label htmlFor='message' className='form__label'>Message</label>
            </div>
            <button type='submit' value='Send' className='intro__button'>
              Send Mail
            </button>
          </form>
        </div>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>
      </div>
      <div className='contact__right'>
        <Map
          mapboxAccessToken='pk.eyJ1IjoieWFzaGZhbGtlNzciLCJhIjoiY2t1MjQ2Z2cwMmxjazJvbXI2OGk5b2V0dSJ9.BGnMIJbpa2OzthfRTtTP6w'
          initialViewState={{
            longitude: 80.9058,
            latitude:26.9252 ,
            zoom: 9.5,
          }}
          // style={{ width: "100%", height: 600 }}
          mapStyle='mapbox://styles/mapbox/satellite-streets-v12'
        >
          <Marker latitude={26.9252} longitude={80.9058}>
            <button type='button' className='map__button'>
              
              <svg width="40" height="132" viewBox="0 0 420 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_405_4)">
                        <path d="M235 473C173.283 420.483 127.188 371.704 96.7125 326.663C66.2375 281.621 51 239.933 51 201.6C51 144.1 69.4958 98.2917 106.487 64.175C143.479 30.0583 186.317 13 235 13C283.683 13 326.521 30.0583 363.512 64.175C400.504 98.2917 419 144.1 419 201.6C419 239.933 403.763 281.621 373.288 326.663C342.812 371.704 296.717 420.483 235 473Z" fill="#0A192F" />
                      </g>
                      <path d="M307 134C261 130 235 180 235 227C235 280 267 307 302 310C330 313 351 299 351 261C351 239 338 218 318 208C306 198 285 192 285 178C285 166 296 161 305 166C313 170 316 182 316 190C316 203 311 211 301 218C294 222 287 227 287 236C287 245 296 246 302 241C308 236 307 226 310 221C313 216 321 217 324 224C328 231 322 241 312 243C304 245 297 241 297 234C297 226 305 222 310 217C315 212 318 204 318 196C318 180 304 167 284 168C264 169 247 177 247 191C247 204 261 213 274 214C280 214 285 209 285 202C285 193 295 186 305 191C315 196 318 206 318 216C318 230 312 237 304 240C297 242 292 239 290 232C289 224 296 218 304 217C312 216 318 212 318 206C318 199 312 195 302 190C293 186 283 183 274 180C268 178 261 174 261 167C261 163 267 157 275 157C281 157 286 161 291 164C295 167 300 170 305 171C311 173 316 175 322 178C327 181 332 183 338 187C344 191 349 195 352 200C356 205 359 211 359 218C359 223 358 229 356 234C354 239 350 244 345 247C341 251 336 254 330 256C323 258 317 260 312 259C308 258 305 257 301 255C299 253 297 250 295 247C293 244 291 241 289 238C287 235 286 232 284 229C283 226 281 223 280 220C279 217 277 214 276 211C275 208 273 204 272 201C271 198 270 195 270 192C270 179 278 169 289 163C301 157 314 157 324 163C332 168 338 176 338 184C338 192 335 200 329 204C325 207 320 209 315 212C308 215 303 218 299 222C295 226 292 231 290 237C288 241 286 247 285 253C284 258 283 264 282 270C281 277 280 283 278 289C277 295 275 301 273 306C271 311 268 315 264 318C261 321 257 323 253 324C249 325 244 325 240 324C237 323 234 321 230 319C226 317 221 314 217 311C213 308 209 304 205 300C200 296 195 291 191 286C188 281 186 275 185 269C183 263 181 257 180 251C179 244 178 237 177 230C177 223 176 216 174 210C172 204 170 198 169 192C168 186 167 179 165 172C164 166 162 160 160 154C158 148 156 142 154 137C153 132 150 127 146 124C143 121 140 118 137 115C134 112 130 109 127 107C125 104 122 101 119 98C116 95 113 92 110 89C107 86 104 83 101 80C99 78 96 76 93 73C90 70 87 67 84 64C81 61 78 58 75 55C72 52 69 49 66 46C63 43 60 40 57 37C54 34 51 31 48 28C45 25 42 22 39 19C36 16 33 13 30 10C27 7 24 4 21 1C18 -2 15 -5 12 -8C9 -11 6 -14 3 -17C0 -20 -3 -23 -6 -26C-9 -29 -12 -32 -15 -35C-18 -38 -21 -41 -24 -44C-27 -47 -30 -50 -33 -53C-36 -56 -39 -59 -42 -62C-45 -65 -48 -68 -51 -71C-54 -74 -57 -77 -60 -80C-63 -83 -66 -86 -69 -89C-72 -92 -75 -95 -78 -98C-81 -101 -84 -104 -87 -107C-90 -110 -93 -113 -96 -116C-99 -119 -102 -122 -105 -125C-108 -128 -111 -131 -114 -134C-117 -137 -120 -140 -123 -143C-126 -146 -129 -149 -132 -152C-135 -155 -138 -158 -141 -161C-144 -164 -147 -167 -150 -170C-153 -173 -156 -176 -159 -179C-162 -182 -165 -185 -168 -188C-171 -191 -174 -194 -177 -197C-180 -200 -183 -203 -186 -206C-189 -209 -192 -212 -195 -215C-198 -218 -201 -221 -204 -224C-207 -227 -210 -230 -213 -233C-216 -236 -219 -239 -222 -242C-225 -245 -228 -248 -231 -251C-234 -254 -237 -257 -240 -260C-243 -263 -246 -266 -249 -269C-252 -272 -255 -275 -258 -278C-261 -281 -264 -284 -267 -287C-270 -290 -273 -293 -276 -296C-279 -299 -282 -302 -285 -305C-288 -308 -291 -311 -294 -314C-297 -317 -300 -320 -303 -323C-306 -326 -309 -329 -312 -332C-315 -335 -318 -338 -321 -341C-324 -344 -327 -347 -330 -350C-333 -353 -336 -356 -339 -359C-342 -362 -345 -365 -348 -368C-351 -371 -354 -374 -357 -377C-360 -380 -363 -383 -366 -386C-369 -389 -372 -392 -375 -395C-378 -398 -381 -401 -384 -404C-387 -407 -390 -410 -393 -413C-396 -416 -399 -419 -402 -422C-405 -425 -408 -428 -411 -431C-414 -434 -417 -437 -420 -440Z" fill="#0A192F" />
                      <path d="M264 142C243 130 222 115 203 115C182 115 162 130 162 148C162 166 182 181 203 181C223 181 243 166 264 148C285 130 285 115 264 142Z" fill="#FFD700" />
                      <path d="M217 143C194 138 176 112 176 84C176 59 194 33 217 28C242 23 268 38 268 62C268 87 250 113 217 143Z" fill="#115173" />
                      <defs>
                        <filter id="filter0_d_405_4" x="0" y="0" width="420" height="512" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-25" dy="13" />
                          <feGaussianBlur stdDeviation="13" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_4" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_4" result="shape" />
                        </filter>
                      </defs>
              </svg>

            </button>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default Contact;
