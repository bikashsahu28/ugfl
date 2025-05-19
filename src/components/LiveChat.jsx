import { useState } from 'react';

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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
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