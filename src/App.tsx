import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

const PageLoadOnScroll = () => {
  const {pathname} = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const pageURL = window.location.href;
    if (pageURL.indexOf("#") >= 0) {
      const splitPageURL = pageURL.split("#");

      console.log(splitPageURL[splitPageURL.length - 1]);
      
      scroller.scrollTo(splitPageURL[splitPageURL.length - 1], {
        duration: 750,
        smooth: true
      });
    }
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <BrowserRouter>
        <PageLoadOnScroll/>
        <Routes>
          <Route path="/portfolio/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="projects" element={<Projects/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
