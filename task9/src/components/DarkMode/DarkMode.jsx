import './DarkMode.css';

export function DarkMode() {
  return (
    <div className="DarkMode">
        <nav className='darkmode-title'>Dark mode</nav>
        <nav className='darkmode-title-info'>Also available in dark.</nav>
        <nav className='darkmode-info'>Don't get blinded when using the H(app)y app at night, just turn off the lights. Lorem ipsum dolor sit amet.</nav>
        <img src={require('../../img/DarkMode.png')} className='darkmode-phone' />
    </div>
  );
}
