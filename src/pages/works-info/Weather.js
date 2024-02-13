import weather from '../../images/works/weather-app.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function Weather() {
  return (
    <div className='work fade-in-text'>
      <h1>Weather Project</h1>

      <a
        href='https://worldweather-search.netlify.app'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image work-image-smaller'
          src={weather}
          alt='Weather'
          title='Weather App'
        />
      </a>

      <p>
        Using React skills to create this weather application, through
        open-source API javaScript library to display real-time weather
        information of the world.
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
        href='https://worldweather-search.netlify.app'
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
