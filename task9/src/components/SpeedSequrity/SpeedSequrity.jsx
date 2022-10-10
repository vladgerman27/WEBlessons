import './SpeedSequrity.css';

export function SpeedSequrity() {
  return (
    <div className="SpeedSequrity">
        <img src={require('../../img/IMAGE.png')} className='SpeedSequrity-phone' />
        <div className='SpeedSequrity-infos'>
            <nav className='SpeedSequrity-title'>Speed & security</nav>
            <nav className='SpeedSequrity-title-info'>State-of-the-art processing capabilities.</nav>
            <nav className='SpeedSequrity-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</nav>
        </div>
    </div>
  );
}
