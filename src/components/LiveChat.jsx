import { useState } from 'react';
import { AiFillMessage, AiOutlineMessage } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add user message
      setMessages([...messages, { sender: 'user', text: messageInput }]);
      setMessageInput('');
      
      // Simulate bot response after delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Thank you for your message. Our customer support team will respond shortly. In the meantime, you might find answers in our FAQ section.' 
        }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
          aria-label="Open live chat"
        >
          <AiOutlineMessage className="h-6 w-6" />
        </button>
      </div>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          <div className="bg-amber-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-amber-200"
              aria-label="Close live chat"
            >
              <IoCloseSharp  className="h-5 w-5" />

            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto max-h-60">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-amber-100 text-amber-900' : 'bg-gray-100 text-gray-800'}`}>
                    {msg.text}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>Welcome to our live chat!</p>
                <p>How can we help you today?</p>
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-amber-600 text-white px-3 py-2 rounded-r-md hover:bg-amber-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LiveChat;