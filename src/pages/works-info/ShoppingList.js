import shoppingList from '../../images/works/shopping-list.png';
import react from '../../images/skills/react.png';
import javaScript from '../../images/skills/js.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';

export default function ShoppingList() {
  return (
    <div className='work fade-in-text'>
      <h1>Shopping List Project</h1>

      <a
        href='https://online-shopping-list.netlify.app/'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image'
          src={shoppingList}
          alt='Shopping List'
          title='Shopping List'
        />
      </a>
      <p>
        Using ReactJS and computer local storage to create this first own
        shopping list app for user to store their list information. Shopping
        list app providing user a convenient and orgainized platform to create
        manage shopping list. online.
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
