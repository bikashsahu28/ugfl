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
// import SocialButtons from './components/SocialButtons';
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
import BranchLocator from './components/BranchLocator';
import PrivacyPolicy from './components/PrivacyPolicy';
import FairPracticeCode from './components/FairPracticeCode';
import GrievanceRedressalPolicy from './components/GrievanceRedressalPolicy';
import OmbudsmantSchemeSalientFeatures from './components/OmbudsmantSchemeSalientFeatures';
import RBIDisclaimer from './components/RBIDisclaimer';
import CustomerAwareness from './components/CustomerAwareness';
import TermsAndConditions from './components/Terms&conditions';
import JobApplicationForm from './components/JobApplicationForm';
import GoldLoanCalculator from './components/GoldLoanCalculator';
import PastMentors from './components/PastMentors';
import ScrollToTop from './components/ScrollToTop';
import Sitemap from './components/Sitemap';
import LiveChat from './components/LiveChat';
import BoardOfDirectors from './components/BoardOfDirectors';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/calculator" element={<Calculator />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
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
            <Route path="/branch-locator" element={<BranchLocator />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/fair-practice-code" element={<FairPracticeCode />} />
            <Route path="/grievance-redressal-policy" element={<GrievanceRedressalPolicy />} />
            <Route path="/ombudsman-scheme-salient-features" element={<OmbudsmantSchemeSalientFeatures />} />
            <Route path="/rbi-disclaimer" element={<RBIDisclaimer />} />
            <Route path="/customer-awareness" element={<CustomerAwareness />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/job-application" element={<JobApplicationForm />} />
            {/* <Route path="/gold-loan-calculator" element={<GoldLoanCalculator />} /> */}
            <Route path="/past-mentors" element={<PastMentors />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/board-of-directors" element={<BoardOfDirectors />} />

          </Routes>
        </main>
        {/* <SocialButtons /> */}
        <LiveChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;