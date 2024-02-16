import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import HeadingBar from './utilities/HeadingBar';
// import backgroundMap from '../images/perth-map.png';
import Lottie from 'react-lottie';
import animationDataEmailSent from '../lotties/email-sent-gold.json';
import animationDataEmailForm from '../lotties/email-form.json';
import animationDataEmailFail from '../lotties/email-sent-fail.json';

import contactJanis from '../images/contact-janis.png';

export default function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [sentCondition, setSentCondition] = useState('');
  const form = useRef();

  function handleSendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1bk363b',
        'template_sx43t6a',
        form.current,
        'Ycd1dKuxI4PYfKsum',
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
          setSentCondition('success');
          console.log(sentCondition);
        },
        (error) => {
          setEmailSent(true);
          setSentCondition('fail');
          console.log(sentCondition);
          console.log(error.text);
        },
      );
    e.target.reset();
  }

  function handleResendEmail(e) {
    e.preventDefault();
    setEmailSent(false);
    setSentCondition('');
  }

  const emailSentOption = {
    loop: false,
    autoplay: true,
    speed: 10,
    animationData: animationDataEmailSent,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const emailFormOption = {
    loop: true,
    autoplay: true,
    speed: 2,
    animationData: animationDataEmailForm,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const emailFailOption = {
    loop: false,
    autoplay: true,
    speed: 10,
    animationData: animationDataEmailFail,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='contact side-wrapper background-map'>
      <HeadingBar />
      <div className='displayFlex contact'>
        <div className='contact-me'>
          <h1>Contact Me!</h1>

          <h2 className='messageBeforeSent'>
            Get in touch with me via LinkedIn or email.
          </h2>
          <div className='displayFlex'>
            <img
              className='contact-janis'
              src={contactJanis}
              alt='Janis Chan'
              title='Janis Chan'
            />

            <ul className='contact-icon'>
              <li>
                <a
                  href='https://www.linkedin.com/in/jc-janis-chan'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faLinkedin} size='xl' /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Janisgee/janis-chan-portfolio'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faSquareGithub} size='xl' /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='contactForm-wrapper'>
          {!emailSent && (
            <form
              action=''
              method='get'
              className='form-container'
              ref={form}
              onSubmit={handleSendEmail}
            >
              <div className='onstart'>
                <Lottie
                  className='lottie-form'
                  options={emailFormOption}
                  height={140}
                  width={90}
                />
              </div>
              <h1>Wish to email me?</h1>
              <p>
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible.😉
              </p>
              <div className='contact-form-structure'>
                <div>
                  <div>
                    <input
                      type='text'
                      name='sender_name'
                      id='sender_name'
                      className='form-block'
                      placeholder='Full Name'
                      required
                      autoFocus
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='sender_email'
                      id='sender_email'
                      placeholder='Email'
                      className='form-block'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      placeholder='Subject'
                      className='form-block'
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  type='text'
                  name='message'
                  id='message'
                  className='form-message'
                  placeholder='Message'
                  required
                />
              </div>
              <button>Send</button>
            </form>
          )}
          {sentCondition === 'success' && (
            <div>
              <div className='paper-plane'>
                <Lottie
                  className='lottie-plane'
                  options={emailSentOption}
                  height={400}
                  width={400}
                />
              </div>
              <p className='message-result'>
                📧 Email sent successfully! <br />
                <button onClick={handleResendEmail}>Send Another Email</button>
              </p>
            </div>
          )}
          {sentCondition === 'fail' && (
            <div>
              <div className='paper-plane'>
                <Lottie
                  className='lottie-plane'
                  options={emailFailOption}
                  height={400}
                  width={400}
                />
              </div>
              <p className='message-result'>
                Email sent fail! ❌ Please try again later!{' '}
                <button onClick={handleResendEmail}>Try Again</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
