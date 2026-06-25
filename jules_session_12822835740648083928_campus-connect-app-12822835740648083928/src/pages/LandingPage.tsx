import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-brand-blue-600 p-2 rounded-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">CampusConnect</span>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 text-slate-600 font-medium hover:text-brand-blue-600 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="px-6 py-2 bg-brand-blue-600 text-white font-medium rounded-full hover:bg-brand-blue-700 transition-all shadow-md">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Connect, Learn, and Grow <br />
            <span className="text-brand-blue-600">with Your Campus</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            The all-in-one platform for students to find tutors, share study resources, and join vibrant campus communities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-brand-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-brand-blue-700 transition-all shadow-lg flex items-center justify-center">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 text-lg font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for Students, by Students</h2>
            <p className="mt-4 text-slate-600">Everything you need to excel in your academic journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="text-brand-blue-600" size={32} />}
              title="Peer Tutoring"
              description="Connect with qualified peer tutors in your college for personalized learning sessions."
            />
            <FeatureCard 
              icon={<BookOpen className="text-brand-green-500" size={32} />}
              title="Notes Sharing"
              description="Access a library of high-quality study notes shared by top students in your courses."
            />
            <FeatureCard 
              icon={<MessageSquare className="text-brand-blue-500" size={32} />}
              title="Interest Groups"
              description="Join clubs and study groups focused on your interests and academic goals."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why CampusConnect?</h2>
            <div className="space-y-4">
              <CheckItem text="Verified student profiles from your institution" />
              <CheckItem text="Seamless booking and communication tools" />
              <CheckItem text="Free resource sharing within communities" />
              <CheckItem text="Collaborative and supportive environment" />
            </div>
          </div>
          <div className="md:w-1/2 bg-brand-blue-50 p-8 rounded-3xl relative overflow-hidden">
             <div className="relative z-10">
                <blockquote className="text-xl italic text-slate-800 font-medium">
                  "CampusConnect completely changed how I study. I found an amazing tutor for my Data Structures class and joined a great study group for finals!"
                </blockquote>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                  <div>
                    <div className="font-bold text-slate-900">Sarah Johnson</div>
                    <div className="text-slate-600">Computer Science Junior</div>
                  </div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue-100 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green-50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <GraduationCap className="text-white" size={24} />
            <span className="text-xl font-bold text-white tracking-tight">CampusConnect</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          © {new Date().getFullYear()} CampusConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-shadow border border-slate-100">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-3">
    <CheckCircle2 className="text-brand-green-500 flex-shrink-0" size={24} />
    <span className="text-slate-700 font-medium">{text}</span>
  </div>
);

export default LandingPage;
