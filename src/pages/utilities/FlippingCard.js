import './FlippingCard.css';
import react2 from '../../images/skills/react2.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';
import nodeJs from '../../images/skills/Node.js_logo.png';
import nextjs from '../../images/skills/nextjs.png';
import expressjs from '../../images/skills/ExpressJS-logo.png';
import mongoDB from '../../images/skills/MongoDB_Logo.svg.png';
import postgresSQL from '../../images/skills/postgresSQL.png';
import golang from '../../images/skills/golang.png';
import python from '../../images/skills/python.png';
import vsCode from '../../images/skills/visual-studio.png';
import github from '../../images/skills/github.png';
import netlify from '../../images/skills/netlify_logo.png';
import bootstrap from '../../images/skills/bootstrap.png';
import tailwind from '../../images/skills/tailwind.png';
import render from '../../images/skills/render.png';
import docker from '../../images/skills/docker.png';


export default function FlippingCard() {
  return (
    <div className='section'>
      <input
        className='skillBar'
        type='checkbox'
        id='skillBar'
        name='skillBar'
      />
      <label htmlFor='skillBar'>
        <span className='titleOne'>
          front-end<span className='titleTwo'>back-end</span>
        </span>
      </label>
      <div className='card-3d-wrap '>
        <div className='card-3d-wrapper'>
          <div className='card-front'>
            <div className='skill-wrap'>
              <h4 className='mb-5'>Front-end</h4>
              <div className='skill-label'>
                <div className='skill-wrapper'>
                  <img
                    className='skill-logo'
                    src={html}
                    alt='HTML'
                    title='HTML'
                  />
                  <img className='skill-logo' src={css} alt='CSS' title='CSS' />
                  <img
                    className='skill-logo'
                    src={javaScript}
                    alt='JavaScript'
                    title='JavaScript'
                  />
                  <img
                    className='skill-logo'
                    src={react2}
                    alt='HTML'
                    title='HTML'
                  />
                    <img
                    className='skill-logo'
                    src={nextjs}
                    alt='Next.JS'
                    title='Next.JS'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='card-back'>
            <div className='skill-wrap'>
              <h4 className='mb-5'>Back-end</h4>
              <div className='skill-label'>
                <div className='skill-wrapper'>
                  <img
                    className='skill-logo'
                    src={nodeJs}
                    alt='Node.JS'
                    title='Node.JS'
                  />
        
                  <img
                    className='skill-logo'
                    src={expressjs}
                    alt='Express JS'
                    title='Express JS'
                  />
                  <img
                    className='skill-logo'
                    src={mongoDB}
                    alt='MongoDB'
                    title='MongoDB'
                  />
                                   <img
                    className='skill-logo'
                    src={postgresSQL}
                    alt='postgresSQL'
                    title='postgresSQL'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
           <h3 className='language-tool'>The programming language I used.</h3>
      <div className='displayFlex'>
        <img
                    className='skill-logo tech-logo'
                    src={javaScript}
                    alt='JavaScript'
                    title='JavaScript'
                  />                  <img
                    className='skill-logo tech-logo'
                    src={python}
                    alt='python'
                    title='Python'
                  />
                          <img
                    className='skill-logo tech-logo'
                    src={golang}
                    alt='go'
                    title='Go'
                  />
      </div>
      <h3 >The build tools I use and more !</h3>
      <div className='displayFlex'>
        <img
          className='skill-logo tech-logo'
          src={vsCode}
          alt='Visual Studio Code'
          title='Visual Studio Code'
        />
        <img
          className='skill-logo tech-logo'
          src={github}
          alt='GitHub'
          title='GitHubas'
        />
        <img
          className='skill-logo tech-logo'
          src={netlify}
          alt='Netlify'
          title='Netlify'
        />
          <img
            className='skill-logo tech-logo'
            src={render}
            alt='Render'
            title='Render'
          />
          <img
            className='skill-logo tech-logo'
            src={docker}
            alt='Docker'
            title='Docker'
          />
        <img
          className='skill-logo tech-logo'
          src={bootstrap}
          alt='Bootstrap'
          title='Bootstrap'
        />
             <img
          className='skill-logo tech-logo'
          src={tailwind}
          alt='Tailwind'
          title='Tailwind'
        />
      </div>
    </div>
  );
}
