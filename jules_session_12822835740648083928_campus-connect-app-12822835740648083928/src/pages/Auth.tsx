import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Mail, Lock, User, Building2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const [role, setRole] = useState<'student' | 'tutor'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Left Side: Branding / Info */}
      <div className="hidden md:flex md:w-1/2 bg-brand-blue-600 p-12 flex-col justify-between relative overflow-hidden">
        <Link to="/" className="flex items-center space-x-2 text-white relative z-10">
          <GraduationCap size={32} />
          <span className="text-2xl font-bold tracking-tight">CampusConnect</span>
        </Link>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join thousands of students <br />
            achieving more together.
          </h2>
          <div className="space-y-4">
            <p className="text-brand-blue-100 flex items-center">
              <span className="w-2 h-2 bg-brand-green-500 rounded-full mr-3"></span>
              Find expert peer tutors in minutes
            </p>
            <p className="text-brand-blue-100 flex items-center">
              <span className="w-2 h-2 bg-brand-green-500 rounded-full mr-3"></span>
              Share and access course-specific notes
            </p>
            <p className="text-brand-blue-100 flex items-center">
              <span className="w-2 h-2 bg-brand-green-500 rounded-full mr-3"></span>
              Participate in active study communities
            </p>
          </div>
        </div>

        <div className="text-brand-blue-200 text-sm relative z-10">
          © 2025 CampusConnect. Designed for students everywhere.
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-500 rounded-full -mr-48 -mt-48 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-600 rounded-full -ml-32 -mb-32 opacity-20"></div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-soft"
        >
          <div className="mb-8">
            <Link to="/" className="text-slate-400 hover:text-brand-blue-600 transition-colors flex items-center mb-6 text-sm">
              <ArrowLeft size={16} className="mr-1" /> Back to home
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </h1>
            <p className="text-slate-500 mt-2">
              {isLogin ? 'Sign in to access your dashboard' : 'Join the community and start learning'}
            </p>
          </div>

          {!isLogin && (
            <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
              <button
                onClick={() => setRole('student')}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  role === 'student' ? 'bg-white text-brand-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                I'm a Student
              </button>
              <button
                onClick={() => setRole('tutor')}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  role === 'tutor' ? 'bg-white text-brand-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                I'm a Tutor
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Your College"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all"
                  />
                </div>
              </>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-blue-600 text-white font-bold py-3 rounded-xl hover:bg-brand-blue-700 transition-all shadow-md flex items-center justify-center group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </form>

          <div className="mt-8 text-center text-slate-500">
            {isLogin ? (
              <p>Don't have an account? <Link to="/signup" className="text-brand-blue-600 font-bold hover:underline">Sign up</Link></p>
            ) : (
              <p>Already have an account? <Link to="/login" className="text-brand-blue-600 font-bold hover:underline">Log in</Link></p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
