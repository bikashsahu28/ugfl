import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icons from './Icons';

function Footer() {
  const { t } = useTranslation();

  // Function to open PDF
  const openPoshPolicy = () => {
    window.open('../PoshPolicy/POSH-policy-final.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UniGold Finance</h3>
            <p className="text-gray-400">{t('footer.tagline')}</p>
            <Icons />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">{t('nav.home')}</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-white">{t('nav.calculator')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@unigold.com</li>
              <li>Phone: 1800-123-4567</li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy policy</Link></li>
              <li><Link to="/fair-practice-code" className="text-gray-400 hover:text-white">Fair Practice Code</Link></li>
              <li onClick={openPoshPolicy} className="text-gray-400 hover:text-white cursor-pointer">Posh Policy</li>
              <li><Link to="/grievance-redressal-policy" className="text-gray-400 hover:text-white">Grievance Redressal Policy</Link></li>
 
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.address')}</h4>
            <p className="text-gray-400">
              123 Finance Street<br />
              Mumbai, Maharashtra<br />
              India - 400001
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UniGold Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;