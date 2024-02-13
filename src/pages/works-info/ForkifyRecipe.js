import forkify from '../../images/works/forkifyRecipe.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function MoneyTracker() {
  return (
    <div className='work fade-in-text'>
      <h1>Forkify Recipe Project</h1>

      <a
        href='https://forkify-janis.netlify.app/'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image'
          src={forkify}
          alt='Forkify Recipe'
          title='Forkify Recipe'
        />
      </a>
      <p>
        Use model-view-controller (MVC) software design pattern to create this
        Forkify Recipe App. Through API to get recipe information and use local
        storage to store bookmarked recipe information.
      </p>

      <div className='work-skill'>
        <span>Tool used: </span>
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
        href='https://forkify-janis.netlify.app/'
        className='clickForMore'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        Click for more ...
      </a>
    </div>
  );
}
