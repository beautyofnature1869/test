import { useState } from 'react';
import { Search, Plus, Users, Send, Paperclip, Smile, MoreHorizontal } from 'lucide-react';

const groupsData = [
  { id: 1, name: "Data Science Enthusiasts", members: 124, lastMessage: "Does anyone have the link to the notebook?", time: "2m ago", icon: "📊", active: true },
  { id: 2, name: "Exam Prep: Calculus II", members: 89, lastMessage: "The review session is tomorrow at 5", time: "15m ago", icon: "📐" },
  { id: 3, name: "AI & Machine Learning", members: 215, lastMessage: "Check out this new paper on transformers", time: "1h ago", icon: "🤖" },
  { id: 4, name: "Student Council 2025", members: 12, lastMessage: "Agenda for Friday's meeting", time: "3h ago", icon: "🏛️" },
  { id: 5, name: "Campus Hiking Club", members: 56, lastMessage: "Weather looks good for Sunday!", time: "5h ago", icon: "🥾" },
  { id: 6, name: "Web Dev Workshop", members: 78, lastMessage: "Next project is a React dashboard", time: "1d ago", icon: "💻" },
];

const messagesData = [
  { id: 1, sender: "Emily W.", text: "Hey everyone! Does anyone have the notes from yesterday's lecture on neural networks?", time: "10:24 AM", isMe: false },
  { id: 2, sender: "You", text: "I have them! I'll upload them to the Notes section in a bit.", time: "10:26 AM", isMe: true },
  { id: 3, sender: "David C.", text: "That would be awesome, thanks Alex!", time: "10:27 AM", isMe: false },
  { id: 4, sender: "Emily W.", text: "Perfect, much appreciated! 🚀", time: "10:28 AM", isMe: false },
  { id: 5, sender: "David C.", text: "Also, don't forget we have a group study session tonight at 7 PM on Discord.", time: "10:30 AM", isMe: false },
];

const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState(groupsData[0]);

  return (
    <div className="h-[calc(100vh-8rem)] flex overflow-hidden bg-white rounded-2xl shadow-soft border border-slate-200">
      {/* Sidebar: Group List */}
      <div className="w-80 border-r border-slate-200 flex flex-col bg-slate-50/30">
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Groups</h2>
            <button className="p-2 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-700 transition-colors">
              <Plus size={18} />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search groups..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {groupsData.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className={`w-full p-4 flex items-start space-x-3 hover:bg-slate-100 transition-colors text-left border-b border-slate-100 ${
                selectedGroup.id === group.id ? 'bg-white border-l-4 border-l-brand-blue-600' : ''
              }`}
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">
                {group.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 truncate">{group.name}</span>
                  <span className="text-[10px] text-slate-400">{group.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-1">{group.lastMessage}</p>
                <div className="flex items-center mt-2">
                  <Users size={10} className="text-slate-400 mr-1" />
                  <span className="text-[10px] text-slate-400 font-medium">{group.members} members</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main: Chat Interface */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">
              {selectedGroup.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{selectedGroup.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-brand-green-500 rounded-full"></span>
                <span className="text-xs text-slate-500 font-medium">12 members online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messagesData.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.isMe ? 'order-1' : 'order-2'}`}>
                {!msg.isMe && <div className="text-xs font-bold text-slate-500 mb-1 ml-1">{msg.sender}</div>}
                <div className={`p-4 rounded-2xl ${
                  msg.isMe 
                    ? 'bg-brand-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-100 text-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
                <div className={`text-[10px] text-slate-400 mt-1 ${msg.isMe ? 'text-right mr-1' : 'ml-1'}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-slate-200">
          <div className="bg-slate-50 rounded-2xl p-2 flex items-center space-x-2 border border-slate-100">
            <button className="p-2 text-slate-400 hover:text-brand-blue-600">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Type your message here..."
              className="flex-1 bg-transparent border-none focus:outline-none text-slate-700 py-2"
            />
            <button className="p-2 text-slate-400 hover:text-brand-blue-600">
              <Smile size={20} />
            </button>
            <button className="p-2 bg-brand-blue-600 text-white rounded-xl shadow-md hover:bg-brand-blue-700 transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
