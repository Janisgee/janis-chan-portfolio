import './Coding.css';
import HeadingBar from './utilities/HeadingBar.js';

export default function Coding() {
  function handleEnterClick(e) {
    e.preventDefault();

    console.log('Enter');
    e.target.parentElement.classList.add('to-left');
    setTimeout(() => {
      console.log('Delayed for 4 second.');
      e.target.parentElement.classList.add('hidden');
    }, '4000');
  }
  return (
    <div className='coding side-wrapper'>
      <HeadingBar />
      <div className='to-right animation-common'>
        <div className='codingbackground'>Skill in Coding</div>
        <div className='enterSign codingbackground' onClick={handleEnterClick}>
          ENTER►
        </div>
      </div>
    </div>
  );
}
