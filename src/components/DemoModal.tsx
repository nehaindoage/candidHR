import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, preselectedPlan }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Senior Product Engineer');
  const [date, setDate] = useState('Tomorrow, 2:00 PM EST');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E1330]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-[#E4E6F0] shadow-2xl max-w-lg w-full overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E4E6F0] flex items-center justify-between bg-[#F6F7FB]">
          <div>
            <h3 className="text-base font-extrabold text-[#0E1330]">
              Book a 15-Minute Candid HR Tour
            </h3>
            <p className="text-xs text-[#6B7290]">
              {preselectedPlan ? `Exploring ${preselectedPlan} plan` : 'See how we source, screen, and interview on your real role'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B7290] hover:text-[#0E1330] rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E3F8F1] flex items-center justify-center text-[#12B886]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-[#0E1330]">
                You're Scheduled!
              </h4>
              <p className="text-xs text-[#3B4262] leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-[#0E1330]">{name}</strong>. A calendar invite has been sent to <strong className="text-[#0E1330]">{email}</strong> for <strong>{date}</strong>. We're excited to walk you through Candid HR!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#0E1330] text-white text-xs font-bold rounded-xl hover:bg-[#3D38F5] transition-colors"
                >
                  Close & Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@company.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                    Open Role to Test
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Lead Designer"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none bg-white"
                >
                  <option value="Tomorrow, 10:00 AM EST">Tomorrow at 10:00 AM EST</option>
                  <option value="Tomorrow, 2:00 PM EST">Tomorrow at 2:00 PM EST</option>
                  <option value="Wednesday, 11:30 AM EST">Wednesday at 11:30 AM EST</option>
                  <option value="Thursday, 3:00 PM EST">Thursday at 3:00 PM EST</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#3D38F5] hover:bg-[#2D28D6] text-white text-xs font-bold rounded-xl shadow-md shadow-[#3D38F5]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Live Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7290] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
                <span>Zero obligations · 100% focused on your actual role</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
