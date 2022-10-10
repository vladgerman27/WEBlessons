import './Download.css';

export function Download() {
  return (
    <div className="Download">
        <nav className='download-title'>Download</nav>
        <nav className='download-title-info'>It's available right now!</nav>
        <nav className='download-info'>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</nav>
        <a href='https://www.apple.com/app-store/'><img src={require('../../img/downloadBtn.png')} className='download-btn' /></a>
    </div>
  );
}
