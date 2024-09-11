import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/css/style.css';
// import '../src/assets/scss/_nav.scss';
import Home from './components/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Participants from './pages/Participants';
import StartupContent from './pages/StartupContent';
import Highlights from './pages/Highlights';
import Speakers from './pages/Speakers';
import STFS from './pages/STFS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Move Header outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element ={<Register />} />
          <Route path='/participants' element ={<Participants />} />
          <Route path='/startup' element ={<StartupContent />} />
          <Route path='/highlights' element ={<Highlights />} />
          <Route path='/speakers' element ={<Speakers />} />
          <Route path='/sharkTank' element ={<STFS />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
