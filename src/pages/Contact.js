import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import HeadingBar from './utilities/HeadingBar';
// import backgroundMap from '../images/perth-map.png';
import Lottie from 'react-lottie';
import animationDataEmailSent from '../lotties/email-sent-gold.json';
import animationDataEmailForm from '../lotties/email-form.json';

import contactJanis from '../images/contact-janis.png';

export default function Contact() {
  const emailSentOption = {
    loop: false,
    autoplay: true,
    speed: 2,
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
  return (
    <div className='contact side-wrapper background-map'>
      <HeadingBar />
      {/* <img
        className='background-map'
        src={backgroundMap}
        alt='Perth Map'
        title='Perth Map'
      /> */}

      <div className='displayFlex contact'>
        <div className='contact-me'>
          <h1>Contact Me!</h1>
          {/* <h2>Want to say "Hi!" ?</h2> */}
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
            <div>
              <ul>
                <li>
                  <a
                    href='https://www.linkedin.com/in/jc-janis-chan'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Janisgee/janis-chan-portfolio'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faSquareGithub} size='xl' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='contactForm-wrapper'>
          <div className='paper-plane'>
            <Lottie
              className='lottie-plane display-none'
              options={emailSentOption}
              height={400}
              width={400}
            />
          </div>
          <form action='' method='get' className='form-container'>
            <div className='onstart'>
              <Lottie
                className='lottie-form'
                options={emailFormOption}
                height={140}
                width={90}
              />
            </div>
            <h1>Wish to email me?</h1>
            <div className='contact-form-structure'>
              <div>
                <div>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-block'
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-block'
                    required
                  />
                </div>
              </div>
              {/* <Lottie
                className='lottie-form'
                options={emailFormOption}
                height={140}
                width={90}
              /> */}
            </div>
            <div>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                type='text'
                name='message'
                id='message'
                className='form-message'
                required
              />
            </div>
            <button>Submit</button>
          </form>
          <h2 className='success-message'>Success!</h2>
        </div>
      </div>
    </div>
  );
}
