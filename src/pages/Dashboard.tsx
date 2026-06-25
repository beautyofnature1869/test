import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  Search, 
  Plus, 
  TrendingUp, 
  Star, 
  Clock 
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, Alex! 👋</h1>
        <p className="text-slate-500 mt-1">Here's what's happening in your campus today.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <ActionCard 
          title="Find a Tutor" 
          description="Get help from expert peers" 
          icon={<Search className="text-brand-blue-600" size={24} />}
          onClick={() => navigate('/tutors')}
          color="bg-brand-blue-50"
        />
        <ActionCard 
          title="Upload Notes" 
          description="Share and earn rewards" 
          icon={<Plus className="text-brand-green-600" size={24} />}
          onClick={() => navigate('/notes')}
          color="bg-brand-green-50"
        />
        <ActionCard 
          title="Join Groups" 
          description="Connect with communities" 
          icon={<Users className="text-orange-600" size={24} />}
          onClick={() => navigate('/groups')}
          color="bg-orange-50"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <TrendingUp className="mr-2 text-brand-blue-600" size={20} /> Trending Notes
              </h2>
              <button onClick={() => navigate('/notes')} className="text-sm text-brand-blue-600 font-semibold hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              <NoteItem title="CS201: Data Structures Final Review" author="Emily W." subject="Computer Science" downloads={245} />
              <NoteItem title="ECON101: Macroeconomics midterm" author="Michael R." subject="Economics" downloads={182} />
              <NoteItem title="BIO204: Molecular Biology Lab Guide" author="Sarah P." subject="Biology" downloads={95} />
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <MessageSquare className="mr-2 text-brand-blue-600" size={20} /> Active Groups
              </h2>
              <button onClick={() => navigate('/groups')} className="text-sm text-brand-blue-600 font-semibold hover:underline">See Groups</button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <GroupMiniCard name="Python Developers" members={124} lastActive="5m ago" />
              <GroupMiniCard name="Med School Prep" members={89} lastActive="12m ago" />
              <GroupMiniCard name="Ethical Hacking" members={56} lastActive="1h ago" />
              <GroupMiniCard name="Fine Arts Collective" members={42} lastActive="3h ago" />
            </div>
          </section>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-soft border border-brand-blue-100">
             <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
               <Clock className="mr-2 text-brand-blue-600" size={18} /> Upcoming Sessions
             </h2>
             <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-brand-blue-500">
                   <div className="text-sm font-bold text-slate-900">Calculus II with John</div>
                   <div className="text-xs text-slate-500 mt-1">Today, 4:00 PM - 5:30 PM</div>
                </div>
                <button className="w-full py-2 text-sm font-semibold text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition-colors">
                  View Full Schedule
                </button>
             </div>
          </section>

          <section className="bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 p-6 rounded-2xl shadow-lg text-white">
             <div className="flex items-center justify-between mb-4">
               <Star className="text-yellow-400 fill-yellow-400" size={24} />
               <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">PRO</span>
             </div>
             <h3 className="font-bold text-lg leading-tight mb-2">Upgrade to CampusConnect+</h3>
             <p className="text-brand-blue-100 text-sm mb-4">Get unlimited note downloads and 10% off tutoring sessions.</p>
             <button className="w-full py-3 bg-white text-brand-blue-600 font-bold rounded-xl hover:bg-brand-blue-50 transition-all">
                Learn More
             </button>
          </section>
        </div>
      </div>
    </div>
  );
};

const ActionCard = ({ title, description, icon, onClick, color }: any) => (
  <button 
    onClick={onClick}
    className={`${color} p-6 rounded-2xl flex flex-col items-start text-left hover:scale-[1.02] transition-transform shadow-sm`}
  >
    <div className="bg-white p-3 rounded-xl shadow-sm mb-4">{icon}</div>
    <h3 className="font-bold text-slate-900">{title}</h3>
    <p className="text-slate-500 text-sm">{description}</p>
  </button>
);

const NoteItem = ({ title, author, subject, downloads }: any) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
    <div className="flex items-center space-x-4">
      <div className="bg-slate-100 p-2 rounded-lg">
        <BookOpen className="text-slate-600" size={20} />
      </div>
      <div>
        <div className="font-semibold text-slate-900 text-sm">{title}</div>
        <div className="text-xs text-slate-500">{author} • {subject}</div>
      </div>
    </div>
    <div className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
      {downloads} downloads
    </div>
  </div>
);

const GroupMiniCard = ({ name, members, lastActive }: any) => (
  <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
    <div className="font-bold text-slate-800 text-sm truncate">{name}</div>
    <div className="flex items-center justify-between mt-2">
      <span className="text-xs text-slate-500">{members} members</span>
      <span className="text-[10px] font-medium text-brand-green-600 bg-brand-green-50 px-1.5 py-0.5 rounded">Active {lastActive}</span>
    </div>
  </div>
);

export default Dashboard;
