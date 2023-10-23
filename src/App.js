import logo from './logo.svg';
import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import Form from './Component/Form/Form';
import HomePage from './Component/HomePage/HomePage';
import Menu from './Component/Menu/Menu';
import { Routes, Route } from 'react-router-dom';

  function App() {
  return (
    <div className='App'>
      <Menu/>
      <header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/form' element={<Form />} />
          <Route path='/gioi-thieu' element={<AboutUs />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
