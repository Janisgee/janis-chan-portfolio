import movieRating from '../../images/works/movie-rating-app.png';
import react from '../../images/skills/react.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function MovieRating() {
  return (
    <div className='work fade-in-text'>
      <h1>Movie Rating Project</h1>

      <a
        href='https://js-movie-rating.netlify.app/'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image work-image-smaller'
          src={movieRating}
          alt='Movie Rating App'
          title='Movie Rating App'
        />
      </a>
      <p>
        Users can use this tool to get movies information and details, it is a
        react application allows user to store their search data on its own
        computer by using local storage system.
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
