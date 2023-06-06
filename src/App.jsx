import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useEffect, useMemo, useState } from 'react';
import Work from './components/Work';
import { Route, Routes } from 'react-router-dom';
import HomeSite from './components/HomeSite';
import AnimCursor from './components/AnimCursor';
import Projects from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Pomodoro, Portfolio } from './assets/data';
import { MusicShop } from './assets/data';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Translation } from 'react-i18next';
import { withTranslation } from 'react-i18next';

function App({ t }) {
  const [isMobile, setIsMobile] = useState(false);

  const checkDeviceType = () => {
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    setIsMobile(isMobile);
  };

  useEffect(() => {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  const pomodoroDesc = t('pomodoroDesc');
  const musicShopDesc = t('musicShopDesc');
  const portfolioDesc = t('portfolioDesc');

  return (
    <Routes>
      <Route path='/' element={<HomeSite />}></Route>
      <Route
        path='/Pomodoro'
        element={
          <Projects
            array={Pomodoro}
            title='Pomodoro'
            desc={pomodoroDesc}
            disableMotion={isMobile} // Pass the isMobile state to disable motion
          />
        }
      ></Route>
      <Route
        path='/MusicShop'
        element={
          <Projects
            array={MusicShop}
            title='Music Shop'
            desc={musicShopDesc}
            disableMotion={isMobile} // Pass the isMobile state to disable motion
          />
        }
      ></Route>
      <Route
        path='/Portfolio'
        element={
          <Projects
            array={Portfolio}
            title='Portfolio'
            desc={portfolioDesc}
            disableMotion={isMobile} // Pass the isMobile state to disable motion
          />
        }
      ></Route>
    </Routes>
  );
}

export default withTranslation()(App);
