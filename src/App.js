import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
