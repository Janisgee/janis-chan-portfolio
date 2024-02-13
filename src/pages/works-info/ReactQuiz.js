import reactQuiz from '../../images/works/react-quiz-app.png';
import react from '../../images/skills/react.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function ReactQuiz() {
  return (
    <div className='work fade-in-text'>
      <h1>React Quiz Project</h1>

      <a
        href='https://js-react-quiz.netlify.app/'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image'
          src={reactQuiz}
          alt='React Quiz App'
          title='React Quiz App'
        />
      </a>
      <p>
        The react quiz app is a application to test user's react knowledge. By
        using useReducer and useEffect hook to create this whole application.
        Use local storage to store user's highest score.
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
        href='https://js-react-quiz.netlify.app/'
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
