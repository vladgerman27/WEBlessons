import './FAQ.css';

export function FAQ() {
  return (
    <div className="FAQ">
      <nav className='faq-title'>FAQ</nav>
      <nav className='faq-title-info'>Some questions & some answers</nav>

      <div className='conteiners'>
        <div className='column1'>
            <nav className='conteiner-title'>What devices does H(app)y support?</nav>
            <nav className='conteiner-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</nav>
            <nav className='conteiner-title'>Will my photos magically be more beautiful if I use this app?</nav>
            <nav className='conteiner-info'>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit.</nav>
        </div>
        <div className='column2'>
            <nav className='conteiner-title'>How many megapixels does H(app)y support?</nav>
            <nav className='conteiner-info'>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</nav>
            <nav className='conteiner-title'>How many photos can I store in H(app)y?</nav>
            <nav className='conteiner-info'>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</nav>
        </div>
      </div>
    </div>
  );
}
