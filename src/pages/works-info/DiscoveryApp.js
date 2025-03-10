import discoveryApp from '../../images/works/discovery-app.png';
import nextJs from '../../images/skills/nextjs.png';
import postgresSQL from '../../images/skills/postgresSQL.png';
import golang from '../../images/skills/golang.png';
import tailwind from '../../images/skills/tailwind.png';


export default function DiscoveryApp() {
  return (
    <div className='work fade-in-text'>
      <h1>Discovery App Project</h1>

      <a
        href='https://discovery-web-client.vercel.app'
        className='click-for-more long-picture'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image'
          src={discoveryApp}
          alt='DiscoveryApp'
          title='DiscoveryApp'
        />
      </a>
      <p>
        This is an application helping user to get place knowladge around the world. Using Next.js to build its front-end interface and Go lang to create back-end server. And using Postgres SQL to store user's bookmark and accounts data.
      </p>

      <div className='work-skill'>
        <span>Tool used: </span>
        <img className='skill-image' src={nextJs} alt='NextJs' title='Next.js' />
        <img className='skill-image' src={postgresSQL} alt='postgresSQL' title='ProgresSQL' />
        <img className='skill-image' src={golang} alt='goLang
        ' title='Go Lang' />
        <img className='skill-image' src={tailwind} alt='tailwindCSS
        ' title='Tailwind CSS' />
    
      </div>
      <a
        href='https://discovery-web-client.vercel.app/'
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
