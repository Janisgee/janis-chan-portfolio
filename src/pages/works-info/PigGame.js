import pigGame from '../../images/works/pig-game.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function PigGame() {
  return (
    <div className='work fade-in-text'>
      <h1>Pig Game Project</h1>

      <a
        href='https://pig-dice-game01.netlify.app'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image work-image-smaller'
          src={pigGame}
          alt='Pig Game'
          title='Pig Game'
        />
      </a>
      <p>
        Use JavaScript, HTML and CSS to create this Pig Game. Each turn, a
        player repeatedly rolls a die until either a 1 is rolled or the player
        holds and scores the sum of the rolls.
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
        href='https://pig-dice-game01.netlify.app'
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
