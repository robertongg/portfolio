import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <BrowserRouter>
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
