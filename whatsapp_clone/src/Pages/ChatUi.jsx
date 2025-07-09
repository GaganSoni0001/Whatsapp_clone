import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

export default function ChatUI() {
  return (
    <div className="flex h-screen bg-[#111b21] text-white">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
