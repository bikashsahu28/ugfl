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
import Loan from './pages/Loans';
import Benifits from './pages/Benefits';
import Valueaddedservices from './pages/Valueservices';
import Process from './pages/Process';
import LoanApplicationForm from './components/LoanApplicationForm';
import History from './pages/History';
import Mission from './pages/Mission';
import Leadership from './pages/Leadership';
import CalculatorComponent from './components/CalculatorComponent';
import FAQSections from './components/mainfaq';
import Galleryes from './pages/Galleryes';
import Button from './components/Button';
import Icons from './components/Icons';

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

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/support" element={<Support />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services/loans" element={<Loan />} />
            <Route path="/services/process" element={<Process />} />
            <Route path="/services/benefits" element={<Benifits />} />
            <Route path="/services/valueservices" element={<Valueaddedservices />} />
            <Route path="/LoanApplicationForm" element={<LoanApplicationForm />} />
            <Route path="/about/company" element={<About />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/calculators" element={<CalculatorComponent />} />
            <Route path="/mainfaq" element={<FAQSections />} />
            <Route path="/galleryes" element={<Galleryes />} />
            <Route path="/btn" element={<Button />} />
            <Route path="/icons" element={<Icons />} />
          </Routes>
        </main>
        <SocialButtons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;