import { useState } from "react";
import './Features.css';

let blocksInfo = [
  {
    id: 1,
    phone: require('../../img/phone1.png'),
    icon: require('../../img/icon1.png'),
    blockTitle: 'Calendar view',
    blockDis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'
  },
  {
    id: 2,
    phone: require('../../img/phone2.png'),
    icon: require('../../img/icon2.png'),
    blockTitle: 'Lists',
    blockDis: 'Dolor sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.'
  },
  {
    id: 3,
    phone: require('../../img/phone1.png'),
    icon: require('../../img/icon3.png'),
    blockTitle: 'Varied type',
    blockDis: 'Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue.'
  },
  {
    id: 4,
    phone: require('../../img/phone3.png'),
    icon: require('../../img/icon4.png'),
    blockTitle: 'Split-screen',
    blockDis: 'Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.'
  },
  {
    id: 5,
    phone: require('../../img/phone1.png'),
    icon: require('../../img/icon5.png'),
    blockTitle: 'Uploads',
    blockDis: 'Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.'
  },
  {
    id: 6,
    phone: require('../../img/phone4.png'),
    icon: require('../../img/icon6.png'),
    blockTitle: 'Focus mode',
    blockDis: 'Lorem sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.'
  },
]

export function Features() {

  const [blocks, setBlocks] = useState(blocksInfo);

  const result = blocks.map(block => {
		return <div key={block.id} className='block'>
      <img src={block.phone} className='phone' />
      <div className='blockInfo'>
        <img src={block.icon} className='icon' />
        <nav className='blockTitle'>{block.blockTitle}</nav>
        <nav className='blockDis'>{block.blockDis}</nav>
      </div>
    </div>
	});

  return (
    <div className="Features">
        <nav className='title'>Features</nav>
        <nav className='discribtion'>The latest & greatest in phone photography.</nav>

        <div className='blocks'>
          {result}
        </div>

        <div className="info">
          <div className="inf">
            <nav className="infoNum">400+</nav>
            <nav className="infoTxt">Pictures analyzed</nav>
          </div>
          
          <div className="inf">
          <nav className="infoNum">25+</nav>
            <nav className="infoTxt">Operations per minute</nav>
          </div>
          
          <div className="inf">
          <nav className="infoNum">95%</nav>
            <nav className="infoTxt">Accuracy</nav>
          </div>
        </div>
    </div>
  );
}
