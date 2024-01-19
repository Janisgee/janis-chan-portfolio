import ticTacToe from '../../images/works/tictactoe.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function TicTacToe() {
  return (
    <div className='work fade-in-text'>
      <h1>Tic Tac Toe Project</h1>

      <a
        href='https://js-tictactoe-app.netlify.app/'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image work-image-smaller'
          src={ticTacToe}
          alt='Tic Tac Toe'
          title='Tic Tac Toe'
        />
      </a>
      <p>
        Use JavaScript, HTML and CSS to create this Tic Tac Toe Game. Two
        players take turns in drawing either an '⭕' or an '❌' in one square of
        a grid consisting of nine squares. The winner is the first player to get
        three of the same symbols in a row.
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
    </div>
  );
}
