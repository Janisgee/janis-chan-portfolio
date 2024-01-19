import dictionary from '../../images/works/dictionary-project.png';
import react from '../../images/skills/react.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function Dictionary() {
  return (
    <div className='work fade-in-text'>
      <h1>Dictionary Project</h1>

      <a
        href='https://project-dictionary-01.netlify.app/'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image work-image-smaller'
          src={dictionary}
          alt='Dictionary'
          title='Dictionary'
        />
      </a>
      <p>
        Use React, JavaScript, HTML and CSS to create this Dictionary App.
        Through open-source api to get the words explanation, phonetic audio and
        images.
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
    </div>
  );
}
