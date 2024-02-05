import './Background.css';
import bubble from '../../images/bubble.png';
import shadow from '../../images/shadow-3.png';

export default function Background() {
  const moveElements = (e) => {
    let backgroundWord = document.querySelector('.containerbackground');
    let position = backgroundWord.getBoundingClientRect();

    let tracker = document.querySelector('.tracker');
    /*Adjust the cursor position*/
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
    tracker.style.opacity = 1;

    /*Adjust the clip-path*/
    backgroundWord.style.setProperty('--x', e.clientX - position.top + 'px');
    backgroundWord.style.setProperty('--y', e.clientY - position.left + 'px');
  };
  document.addEventListener('mousemove', moveElements);
  return (
    <div className='background'>
      <div className='tracker'></div>
      <div
        className='containerbackground  to-right animation-common'
        style={{ '--delay': '0s' }}
        data-text='Janis Chan Software Developer'
      >
        <div>Janis Chan</div>
        <div className='softwareWord'>Software</div>
        <div className='developerWord'>Developer</div>
      </div>
      <img
        src={shadow}
        alt=''
        className='shadow animation-common sm-hidden'
        // data-offset='.02'
        style={{ '--delay': '0.35s' }}
      />
      <img
        src={shadow}
        alt=''
        className='shadow shadow-md animation-common sm-hidden'
        // data-offset='.02'
        style={{ '--delay': '0.35s' }}
      />
      <img
        src={bubble}
        alt=''
        className='bubble animation-common sm-hidden'
        // data-offset='.05'
        style={{ '--delay': '0.5s' }}
      />
      <img
        src={bubble}
        alt=''
        className='bubble bubble-md animation-common sm-hidden'
        // data-offset='.025'
        style={{ '--delay': '0.25s' }}
      />
      <img
        src={bubble}
        alt=''
        className='bubble bubble-lg animation-common sm-hidden'
        // data-offset='.02'
        style={{ '--delay': '0.35s' }}
      />
    </div>
  );
}
