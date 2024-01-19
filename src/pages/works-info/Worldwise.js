import worldwise from '../../images/works/worldwise.png';
import react from '../../images/skills/react.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function Worldwise() {
  return (
    <div className='work fade-in-text'>
      <h1>Worldwise Project</h1>

      <img
        className='work-image'
        src={worldwise}
        alt='Worldwise'
        title='Worldwise'
      />
      <p>
        Using React skills to create this worldwise application, through
        open-source API javaScript library to display map information of the
        world.
      </p>

      <div className='work-skill'>
        <span>Tool used: </span>
        <img className='skill-image' src={react} alt='React' title='React' />
        <img
          className='skill-image'
          src={javaScript}
          alt='JavaScript'
          title='JavaScript'
        />
        <img className='skill-image' src={css} alt='CSS' title='CSS' />
        <img className='skill-image' src={html} alt='HTML' title='HTML' />
      </div>

      <a
        href='https://worldwise-practice-01.netlify.app'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <h4>Click for more!</h4>
      </a>
    </div>
  );
}
