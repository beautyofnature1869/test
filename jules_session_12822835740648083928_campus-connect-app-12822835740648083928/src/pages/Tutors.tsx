import { useState } from 'react';
import { Search, Filter, Star, Clock, MapPin, CheckCircle } from 'lucide-react';

const tutorsData = [
  {
    id: 1,
    name: "Dr. James Wilson",
    subject: "Calculus & Linear Algebra",
    rating: 4.9,
    reviews: 128,
    price: 25,
    image: "https://i.pravatar.cc/150?u=1",
    college: "Stanford University",
    availability: "Available Today"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    subject: "Data Science & Python",
    rating: 4.8,
    reviews: 94,
    price: 20,
    image: "https://i.pravatar.cc/150?u=2",
    college: "MIT",
    availability: "Available Tomorrow"
  },
  {
    id: 3,
    name: "David Chen",
    subject: "Organic Chemistry",
    rating: 5.0,
    reviews: 215,
    price: 30,
    image: "https://i.pravatar.cc/150?u=3",
    college: "UC Berkeley",
    availability: "Available in 2 days"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    subject: "Macroeconomics",
    rating: 4.7,
    reviews: 56,
    price: 18,
    image: "https://i.pravatar.cc/150?u=4",
    college: "Columbia University",
    availability: "Available Today"
  },
  {
    id: 5,
    name: "Dr. Robert Fox",
    subject: "Psychology & Sociology",
    rating: 4.9,
    reviews: 82,
    price: 22,
    image: "https://i.pravatar.cc/150?u=5",
    college: "Harvard University",
    availability: "Available Today"
  },
  {
    id: 6,
    name: "Aisha Patel",
    subject: "Creative Writing",
    rating: 4.6,
    reviews: 43,
    price: 15,
    image: "https://i.pravatar.cc/150?u=6",
    college: "NYU",
    availability: "Next week"
  }
];

const Tutors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Find a Peer Tutor</h1>
          <p className="text-slate-500">Connect with top students for personalized help.</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search subjects or names..."
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 w-full md:w-64 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {['All Subjects', 'Computer Science', 'Mathematics', 'Biology', 'Economics', 'Psychology'].map((tag, i) => (
          <button 
            key={tag}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0 ? 'bg-brand-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Tutors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorsData.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

const TutorCard = ({ tutor }: any) => (
  <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden hover:shadow-lg transition-all group">
    <div className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img src={tutor.image} alt={tutor.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-100" />
          <div>
            <h3 className="font-bold text-slate-900 group-hover:text-brand-blue-600 transition-colors">{tutor.name}</h3>
            <div className="flex items-center text-xs text-slate-500 mt-1">
              <MapPin size={12} className="mr-1" /> {tutor.college}
            </div>
          </div>
        </div>
        <div className="flex items-center bg-brand-green-50 text-brand-green-600 px-2 py-1 rounded-lg text-xs font-bold">
          <Star size={12} className="mr-1 fill-brand-green-600" /> {tutor.rating}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-semibold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full inline-block">
          {tutor.subject}
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-slate-600">
            <Clock size={14} className="mr-2" /> {tutor.availability}
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <CheckCircle size={14} className="mr-2 text-brand-green-500" /> {tutor.reviews} sessions completed
          </div>
        </div>
      </div>
    </div>

    <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-2 bg-slate-50/50">
      <div>
        <span className="text-lg font-bold text-slate-900">${tutor.price}</span>
        <span className="text-xs text-slate-500"> / hour</span>
      </div>
      <button className="px-5 py-2 bg-brand-blue-600 text-white text-sm font-bold rounded-xl hover:bg-brand-blue-700 transition-all shadow-md">
        Book Session
      </button>
    </div>
  </div>
);

export default Tutors;
