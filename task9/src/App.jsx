import './styles/App.css';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { Features } from './components/Features/Features.jsx';
import { Technology } from './components/Technology/Technology.jsx';
import { SpeedSequrity } from './components/SpeedSequrity/SpeedSequrity';
import { DarkMode } from './components/DarkMode/DarkMode';
import { Pricing } from './components/Pricing/Pricing';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Download } from './components/Download/Download';
import { FAQ } from './components/FAQ/FAQ';
import { Contacts } from './components/Conctacts/Contacts';

function App() {
  return (
    <div className="App">
      <MainPage />
      <div id='features'>
        <Features />
      </div>
      <Technology />
      <SpeedSequrity />
      <DarkMode />
      <div id="pricing">
        <Pricing />
      </div>
      <div id='testimonials'>
        <Testimonials />
      </div>
      <div id='download'>
        <Download />
      </div>
      <FAQ />
      <Contacts />
    </div>
  );
}

export default App;
