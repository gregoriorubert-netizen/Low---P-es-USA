import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] flex flex-col font-sans relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
      
      {/* Back button */}
      <div className="relative z-10 p-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[#6A4E3D] hover:text-[#3E271D] transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-[#3E271D]/10">
          <div className="p-10">
            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl font-bold text-[#3E271D] mb-3">Welcome Back</h1>
              <p className="text-[#6A4E3D]">Sign in to access your members area and recipes.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#3E271D] mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#6A4E3D]">
                    <Mail className="h-5 w-5 opacity-60" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-[#FDFBF7] border border-[#3E271D]/20 rounded-xl text-[#3E271D] placeholder-[#3E271D]/30 focus:outline-none focus:ring-2 focus:ring-[#D48625]/50 focus:border-[#D48625] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E271D] mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#6A4E3D]">
                    <Lock className="h-5 w-5 opacity-60" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-[#FDFBF7] border border-[#3E271D]/20 rounded-xl text-[#3E271D] placeholder-[#3E271D]/30 focus:outline-none focus:ring-2 focus:ring-[#D48625]/50 focus:border-[#D48625] transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                <div className="mt-2 text-right">
                  <a href="#" className="text-sm text-[#D48625] hover:text-[#B97520] font-medium transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D48625] hover:bg-[#B97520] text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg hover:shadow-xl mt-4"
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="bg-[#F8F5F0] py-6 px-10 text-center border-t border-[#3E271D]/10">
            <p className="text-[#6A4E3D] text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-[#3E271D] font-bold hover:underline">
                Join our waitlist
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
