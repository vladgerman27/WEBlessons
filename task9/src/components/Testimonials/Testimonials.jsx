import './Testimonials.css';

export function Testimonials() {
  return (
    <div className="Testimonials">
        <nav className='testimonials-title'>Testimonials</nav>
        <nav className='testimonials-title-info'>Don't take our word for it.</nav>
        <nav className='testimonials-info'>See what our customers are saying.</nav>
        <div className='comments'>
            <div className='comment-card'>
                <nav className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</nav>
                <div className='profile'>
                    <img src={require('../../img/profilePhoto1.png')} className='profile-photo' />
                    <div className='profile-info'>
                        <nav className='profile-name'>Pam Beesly</nav>
                        <nav className='profile-job'>Dunder Mifflin</nav>
                    </div>
                </div>
            </div>

            <div className='comment-card'>
                <nav className='comment'>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</nav>
                <div className='profile'>
                    <img src={require('../../img/profilePhoto2.png')} className='profile-photo' />
                    <div className='profile-info'>
                        <nav className='profile-name'>Michael Scott</nav>
                        <nav className='profile-job'>Dunder Mifflin</nav>
                    </div>
                </div>
            </div>

            <div className='comment-card'>
                <nav className='comment'>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.</nav>
                <div className='profile'>
                    <img src={require('../../img/profilePhoto3.png')} className='profile-photo' />
                    <div className='profile-info'>
                        <nav className='profile-name'>Angels Schrute</nav>
                        <nav className='profile-job'>Dunder Mifflin</nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
