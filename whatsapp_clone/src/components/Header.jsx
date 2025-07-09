export default function Header() {
  return (
    <div className="bg-[#202c33] p-3 flex space-x-6 font-medium">
      <button className="hover:text-green-500">Status</button>
      <button className="hover:text-green-500">Chats</button>
      <button className="hover:text-green-500">Community</button>
      <button className="hover:text-green-500">Settings</button>
    </div>
  );
}
