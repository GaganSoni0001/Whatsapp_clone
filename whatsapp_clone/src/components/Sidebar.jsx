import { FaUserFriends, FaComments, FaUsers, FaCog } from 'react-icons/fa';

export default function Sidebar({ onSelectUser }) {
  const users = [
    { name: 'Alice', img: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob', img: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Charlie', img: 'https://i.pravatar.cc/150?img=3' },
    { name: 'David', img: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Eva', img: 'https://i.pravatar.cc/150?img=5' },
  ];

  return (
    <div className="w-1/3 max-w-xs bg-[#202c33] h-full flex flex-col border-r border-[#2a3942]">
      {/* Sidebar Header Tabs */}
      <div className="p-4 border-b border-[#2a3942] space-y-4">
        <SidebarTab icon={<FaUserFriends />} label="Status" />
        <SidebarTab icon={<FaComments />} label="Chats" />
        <SidebarTab icon={<FaUsers />} label="Community" />
        <SidebarTab icon={<FaCog />} label="Settings" />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {users.map((user, index) => (
          <div
            key={index}
            onClick={() => onSelectUser(user)}
            className="flex items-center space-x-3 p-2 rounded hover:bg-[#3b4a54] cursor-pointer"
          >
            <img
              src={user.img}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium">{user.name}</h4>
              <p className="text-sm text-gray-400">Hey there!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SidebarTab({ icon, label }) {
  return (
    <div className="flex items-center space-x-3 text-white hover:text-green-400 cursor-pointer">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
