//styles
import './App.css';

//pages
import Home from './pages/Home';
import Gallery from './pages/Gallery'
import About from './pages/About'
import Add from './pages/Add'

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
