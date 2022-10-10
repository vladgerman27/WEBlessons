import './Technology.css';

export function Technology() {
  return (
    <div className="Technology">
        <div className='technology-infos'>
            <nav className='technology-title'>TEchnology</nav>
            <nav className='technology-title-info'>Use H(app)y to give your digital photos some pop.</nav>
            <nav className='technology-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</nav>
        </div>
        <img src={require('../../img/phone5.png')} className='phone' />
    </div>
  );
}
