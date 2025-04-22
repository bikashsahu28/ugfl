import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Support from './pages/Support';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/support" element={<Support />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <SocialButtons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;