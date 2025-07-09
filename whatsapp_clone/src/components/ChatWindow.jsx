import { useState } from 'react';
import { FaPhoneAlt, FaEllipsisV, FaPaperPlane } from 'react-icons/fa';

export default function ChatWindow({ user, messages, onSend }) {
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0b141a]">
        <p className="text-gray-400">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#0b141a]">
      {/* Top Header */}
      <div className="flex items-center justify-between p-3 bg-[#202c33] border-b border-[#2a3942]">
        <div className="flex items-center space-x-3">
          <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
          <span className="font-medium text-lg">{user.name}</span>
        </div>
        <div className="flex space-x-4 text-xl">
          <FaPhoneAlt className="cursor-pointer hover:text-green-500" />
          <FaEllipsisV className="cursor-pointer hover:text-green-500" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded max-w-xs ${
              msg.fromMe ? 'bg-green-600 self-end ml-auto' : 'bg-[#2a3942]'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-3 flex items-center border-t border-[#2a3942]">
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 rounded-l bg-[#2a3942] focus:outline-none text-white"
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 px-4 py-2 rounded-r text-white hover:bg-green-600 flex items-center justify-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
