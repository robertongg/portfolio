import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Layout from './pages/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="about" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
