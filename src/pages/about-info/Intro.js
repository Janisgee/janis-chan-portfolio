import { TypeAnimation } from 'react-type-animation';

export default function Coding() {
  return (
    <div className='aboutMessage intoName toRight animation-common'>
      <TypeAnimation
        sequence={[`Hi! I am \n Janis Chan!`, 30000, '']}
        speed={50}
        style={{
          whiteSpace: 'pre-line',
          fontSize: '5em',

          fontWeight: '600',
        }}
        repeat={Infinity}
      />
    </div>
  );
}
