import './MainPage.css';

export function MainPage() {
  return (
    <div className="MainPage">
      <header>
        <div className='header'>
          <a href='./Mainpage.jsx'><img src={require('../../img/logo.png')} className="logo" /></a>

          <ul className='nav-links'>
            <a href='#features'><li className='nav-link'>Features</li></a>
            <a href='#pricing'><li className='nav-link'>Pricing</li></a>
            <a href='#testimonials'><li className='nav-link'>Testimonials</li></a>
            <a href=''><li className='nav-link'>Instructions</li></a>
          </ul>

          <button className='first-btn'>Get template</button>
        </div>
      </header>


      <div className='first-page'>
        <div className='greeting'>
          <img src={require('../../img/logo.png')} /> 
          <nav className='title'>The future of digital photos.</nav>
          <nav className='discribtion'>The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</nav>
          <div className='info-btn'>
            <a href='#download'><button className='first-btn'>Download</button></a>
            <button className='first-btn'>Read more</button>
          </div>
        </div>

        <img src={require('../../img/IMAGE.png')} className='IMAGE' />
      </div>
    </div>
  );
}
