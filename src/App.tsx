import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Layout from './page/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Layout/>}>
            <Route index element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
