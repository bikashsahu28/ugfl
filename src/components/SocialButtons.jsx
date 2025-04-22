import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function SocialButtons() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col space-y-2 z-50">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://www.instagram.com/financeunigold?igsh=MWN0bDZuZTc2am5kYg=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity"
        aria-label="Follow on Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
}

export default SocialButtons;