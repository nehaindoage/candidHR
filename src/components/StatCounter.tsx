import React from 'react';
import { TrendingDown, Users, ThumbsUp, Clock } from 'lucide-react';

export const StatCounter: React.FC = () => {
  return (
    <section className="py-14 bg-[#0E1330] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 space-y-1">
            <div className="w-8 h-8 mx-auto rounded-lg bg-white/10 flex items-center justify-center text-[#4ade9e] mb-2">
              <TrendingDown className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight font-heading">
              68%
            </div>
            <div className="text-xs text-[#B4B9D6] font-medium font-body">
              Faster time-to-first-interview
            </div>
          </div>

          <div className="p-4 space-y-1">
            <div className="w-8 h-8 mx-auto rounded-lg bg-white/10 flex items-center justify-center text-[#9F96FF] mb-2">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight font-heading">
              3.4x
            </div>
            <div className="text-xs text-[#B4B9D6] font-medium font-body">
              Candidate completion rate
            </div>
          </div>

          <div className="p-4 space-y-1">
            <div className="w-8 h-8 mx-auto rounded-lg bg-white/10 flex items-center justify-center text-[#4ade9e] mb-2">
              <ThumbsUp className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight font-heading">
              94%
            </div>
            <div className="text-xs text-[#B4B9D6] font-medium font-body">
              Hiring manager satisfaction
            </div>
          </div>

          <div className="p-4 space-y-1">
            <div className="w-8 h-8 mx-auto rounded-lg bg-white/10 flex items-center justify-center text-[#9F96FF] mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight font-heading">
              16+ hrs
            </div>
            <div className="text-xs text-[#B4B9D6] font-medium font-body">
              Saved per role weekly
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
