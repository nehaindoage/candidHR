import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, Star } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-[#F6F7FB]/70 border-t border-[#E4E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] font-body">
            Social Proof
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1330] tracking-tight font-heading">
            What Hiring Leaders <span className="text-[#3D38F5]">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A516D] font-body">
            Hear from companies that transformed resume overload into authentic talent connection.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-[#E4E6F0] hover:border-[#c9c6ff] hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0A7F5D] bg-[#E3F8F1] px-2 py-0.5 rounded font-body">
                    {t.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#2C324E] leading-relaxed font-body italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Strip */}
              <div className="pt-4 border-t border-[#E4E6F0] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3D38F5] text-white flex items-center justify-center font-bold text-xs font-heading">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0E1330] font-heading leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#6B7290] font-body">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
