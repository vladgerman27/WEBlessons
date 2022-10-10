import './Contacts.css';

export function Contacts() {
  return (
    <div className="Contacts">
        <img src={require('../../img/contactsLogo.png')} className="contacts-logo" />
        <div className='messengers'>
            <a href='https://twitter.com/'><img src={require('../../img/twitter.png')} className="messenger" /></a>
            <a href='https://www.instagram.com/'><img src={require('../../img/instagram.png')} className="messenger" /></a>
            <a href='https://www.facebook.com/'><img src={require('../../img/facebook.png')} className="messenger" /></a>
        </div>
        <nav className='contacts-info'>Powered by <span>Webflow</span>. All rights reserved by Happy Apps, Inc.<span>Licensing</span>.</nav>
    </div>
  );
}
