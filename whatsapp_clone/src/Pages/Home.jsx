import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  const [chatData, setChatData] = useState({
    Alice: [
      { text: 'Hi Alice!', fromMe: true },
      { text: 'Hello!', fromMe: false },
    ],
    Bob: [
      { text: 'Hey Bob, what’s up?', fromMe: true },
      { text: 'All good bro!', fromMe: false },
    ],
    Charlie: [
      { text: 'Meeting at 3?', fromMe: true },
      { text: 'Yes, confirmed!', fromMe: false },
    ],
    David: [
      { text: 'Ready for the game?', fromMe: true },
      { text: 'Always!', fromMe: false },
    ],
    Eva: [
      { text: 'Hello Eva!', fromMe: true },
      { text: 'Hey there!', fromMe: false },
    ],
  });

  // Add new message to the current chat
  const handleSendMessage = (message) => {
    if (!selectedUser) return;
    const name = selectedUser.name;
    const newMessages = [...(chatData[name] || []), { text: message, fromMe: true }];
    setChatData({ ...chatData, [name]: newMessages });
  };

  return (
    <div className="flex h-screen bg-[#111b21] text-white">
      <Sidebar onSelectUser={setSelectedUser} />
      <ChatWindow
        user={selectedUser}
        messages={selectedUser ? chatData[selectedUser.name] || [] : []}
        onSend={handleSendMessage}
      />
    </div>
  );
}
