import { Search, Upload, Download, FileText, Filter, MoreVertical, Eye, Heart } from 'lucide-react';

const notesData = [
  { id: 1, title: "Data Structures - Final Review", subject: "Computer Science", author: "Emily Watson", size: "2.4 MB", type: "PDF", downloads: 456, likes: 89, date: "2 days ago" },
  { id: 2, title: "Macroeconomics Midterm Notes", subject: "Economics", author: "Michael Reed", size: "1.1 MB", type: "PDF", downloads: 231, likes: 45, date: "1 week ago" },
  { id: 3, title: "Molecular Biology - Lab Guide", subject: "Biology", author: "Sarah Parker", size: "5.7 MB", type: "DOCX", downloads: 124, likes: 32, date: "3 days ago" },
  { id: 4, title: "Calculus II: Integrals Cheat Sheet", subject: "Mathematics", author: "John Doe", size: "850 KB", type: "PDF", downloads: 892, likes: 215, date: "5 days ago" },
  { id: 5, title: "Psychology 101 - Personality Theories", subject: "Psychology", author: "Robert Fox", size: "3.2 MB", type: "PDF", downloads: 167, likes: 54, date: "2 weeks ago" },
  { id: 6, title: "Intro to Modern Art - Lecture Series", subject: "Fine Arts", author: "Aisha Patel", size: "12.5 MB", type: "ZIP", downloads: 89, likes: 21, date: "1 month ago" },
];

const Notes = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Study Notes</h1>
          <p className="text-slate-500">Access the best resources from your peers.</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-5 py-2.5 bg-brand-blue-600 text-white font-bold rounded-xl hover:bg-brand-blue-700 transition-all shadow-md">
            <Upload size={18} />
            <span>Upload Notes</span>
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by title, subject, or author..."
            className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 w-full outline-none transition-all"
          />
        </div>
        <div className="flex items-center space-x-2">
          <select className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-600 outline-none focus:border-brand-blue-500 transition-colors">
            <option>All Subjects</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
            <option>Biology</option>
          </select>
          <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notesData.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

const NoteCard = ({ note }: any) => (
  <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden hover:shadow-lg transition-all flex flex-col">
    <div className="p-6 flex-1">
      <div className="flex items-start justify-between">
        <div className="p-3 bg-brand-blue-50 text-brand-blue-600 rounded-xl">
          <FileText size={24} />
        </div>
        <button className="text-slate-400 hover:text-slate-600 p-1">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <div className="mt-4">
        <div className="text-xs font-bold text-brand-green-600 uppercase tracking-wider mb-1">{note.subject}</div>
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 hover:text-brand-blue-600 transition-colors cursor-pointer">{note.title}</h3>
        <p className="text-sm text-slate-500">By {note.author} • {note.date}</p>
      </div>

      <div className="mt-6 flex items-center space-x-4">
        <div className="flex items-center text-xs text-slate-500">
          <Download size={14} className="mr-1" /> {note.downloads}
        </div>
        <div className="flex items-center text-xs text-slate-500">
          <Heart size={14} className="mr-1" /> {note.likes}
        </div>
        <div className="text-xs text-slate-400 ml-auto">{note.size}</div>
      </div>
    </div>
    
    <div className="p-4 bg-slate-50 flex items-center justify-between border-t border-slate-100">
      <button className="flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-bold text-slate-600 hover:text-brand-blue-600 transition-colors border-r border-slate-200">
        <Eye size={16} />
        <span>Preview</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-2 py-2 text-sm font-bold text-brand-blue-600 hover:bg-brand-blue-100/50 transition-colors">
        <Download size={16} />
        <span>Download</span>
      </button>
    </div>
  </div>
);

export default Notes;
