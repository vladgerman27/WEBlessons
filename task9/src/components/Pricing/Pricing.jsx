import './Pricing.css';

export function Pricing() {
  return (
    <div className="Pricing">
        <nav className='pricing-title'>Pricing</nav>
        <nav className='pricing-title-info'>A plan for every need.</nav>
        <nav className='pricing-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</nav>
        <div className='price-blocks'>
            <div className='price-block' id='price-block1'>
                <nav className='price-block-title'>Standard</nav>
                <nav className='price-cost'>$9</nav>
                <nav className='price-status'>Monthly</nav>
                <button className='price-btn'>Buy now</button>
            </div> 
            
            <div className='price-block' id='price-block2'>
                <nav className='price-block-title'>Premium</nav>
                <nav className='price-cost'>$99</nav>
                <nav className='price-status'>Annually</nav>
                <button className='price-btn'>Buy now</button>
            </div>
            
            <div className='price-block' id='price-block3'>
                <nav className='price-block-title'>Lifetime</nav>
                <nav className='price-cost'>$149</nav>
                <nav className='price-status'>up front</nav>
                <button className='price-btn'>Buy now</button>
            </div>
        </div>
    </div>
  );
}
