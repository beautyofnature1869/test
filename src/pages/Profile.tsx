import { User, Mail, Building2, BookOpen, Edit2, Shield, Bell, LogOut, ChevronRight } from 'lucide-react';

const Profile = () => {
  const user = {
    name: "Alex Thompson",
    email: "alex.thompson@university.edu",
    college: "University of Washington",
    major: "Computer Science",
    year: "Junior",
    subjects: ["Data Structures", "Algorithms", "Calculus II", "Machine Learning"],
    avatar: "https://i.pravatar.cc/150?u=alex"
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Your Profile</h1>
        <p className="text-slate-500">Manage your account and preferences.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Personal Info Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100 flex flex-col items-center text-center">
             <div className="relative">
                <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-3xl object-cover mb-4 ring-4 ring-brand-blue-50" />
                <button className="absolute bottom-2 right-0 p-1.5 bg-brand-blue-600 text-white rounded-lg shadow-lg border-2 border-white hover:bg-brand-blue-700 transition-all">
                  <Edit2 size={12} />
                </button>
             </div>
             <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
             <p className="text-sm font-medium text-brand-blue-600">{user.major}</p>
             <div className="mt-4 w-full pt-4 border-t border-slate-50 space-y-3">
                <div className="flex items-center text-slate-600 text-sm">
                   <Mail size={16} className="mr-3 text-slate-400" />
                   <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                   <Building2 size={16} className="mr-3 text-slate-400" />
                   <span>{user.college}</span>
                </div>
             </div>
             <button className="mt-6 w-full py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all">
                Edit Profile
             </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
             <h3 className="font-bold text-slate-900 mb-4">My Subjects</h3>
             <div className="flex flex-wrap gap-2">
                {user.subjects.map(subject => (
                  <span key={subject} className="px-3 py-1 bg-brand-blue-50 text-brand-blue-600 text-xs font-bold rounded-full">
                    {subject}
                  </span>
                ))}
                <button className="p-1 px-2 border border-dashed border-slate-300 rounded-full text-slate-400 hover:text-brand-blue-600 hover:border-brand-blue-600 transition-colors">
                   <Plus size={12} />
                </button>
             </div>
          </div>
        </div>

        {/* Right Column: Settings & Activities */}
        <div className="md:col-span-2 space-y-6">
           <section className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-50">
                 <h3 className="font-bold text-slate-900">Account Settings</h3>
              </div>
              <div className="divide-y divide-slate-50">
                 <SettingsItem icon={<User size={20} className="text-brand-blue-500" />} title="Personal Information" description="Update your name, bio, and college details" />
                 <SettingsItem icon={<Shield size={20} className="text-brand-green-500" />} title="Security & Privacy" description="Change your password and manage sessions" />
                 <SettingsItem icon={<Bell size={20} className="text-orange-500" />} title="Notifications" description="Choose what you want to be notified about" />
                 <SettingsItem icon={<BookOpen size={20} className="text-purple-500" />} title="Academic Interests" description="Manage your subjects and courses" />
              </div>
           </section>

           <section className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                 <ActivityItem title="Downloaded 'Calculus II Cheat Sheet'" time="2 hours ago" />
                 <ActivityItem title="Joined 'AI & Machine Learning' group" time="Yesterday" />
                 <ActivityItem title="Booked a session with Dr. James Wilson" time="2 days ago" />
              </div>
           </section>

           <button className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl flex items-center justify-center space-x-2 hover:bg-red-100 transition-all">
              <LogOut size={20} />
              <span>Log Out</span>
           </button>
        </div>
      </div>
    </div>
  );
};

const SettingsItem = ({ icon, title, description }: any) => (
  <button className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors text-left group">
    <div className="flex items-center space-x-4">
       <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-white transition-colors">{icon}</div>
       <div>
          <div className="font-bold text-slate-900 text-sm">{title}</div>
          <div className="text-xs text-slate-500 mt-0.5">{description}</div>
       </div>
    </div>
    <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
  </button>
);

const ActivityItem = ({ title, time }: any) => (
  <div className="flex items-start space-x-3">
     <div className="w-2 h-2 mt-1.5 rounded-full bg-brand-blue-500"></div>
     <div>
        <div className="text-sm font-medium text-slate-800">{title}</div>
        <div className="text-[10px] text-slate-500">{time}</div>
     </div>
  </div>
);

const Plus = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default Profile;
