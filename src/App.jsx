import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/vite-tailwind/' element={<Home />} />
          <Route path='/vite-tailwind/services' element={<Services />} />
          <Route path='/vite-tailwind/about' element={<AboutUs />} />
          <Route path='/vite-tailwind/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
