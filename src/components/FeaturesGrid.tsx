import React from 'react';
import { MINDVERSE_FEATURES } from '../data/content';
import { 
  FileText, 
  Sparkles, 
  BadgeCheck, 
  Code2, 
  Users, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text': return <FileText className="w-5 h-5 text-[#3D38F5]" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-[#3D38F5]" />;
      case 'code': return <Code2 className="w-5 h-5 text-[#3D38F5]" />;
      case 'badge-check': return <BadgeCheck className="w-5 h-5 text-[#12B886]" />;
      case 'users': return <Users className="w-5 h-5 text-[#12B886]" />;
      case 'layers': return <Layers className="w-5 h-5 text-[#3D38F5]" />;
      default: return <Sparkles className="w-5 h-5 text-[#3D38F5]" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] font-body">
            Core Specialties
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1330] tracking-tight font-heading">
            Why Candid HR <span className="text-[#3D38F5]">Stands Out</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A516D] font-body">
            Built for talent teams who want real signal over resume keyword stuffing.
          </p>
        </div>

        {/* 6 Features Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINDVERSE_FEATURES.map((feat, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#F6F7FB] border border-[#E4E6F0] hover:border-[#c9c6ff] hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E4E6F0] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(feat.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#6B7290] bg-white px-2.5 py-1 rounded-md border border-[#E4E6F0] font-body">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0E1330] font-heading group-hover:text-[#3D38F5] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A516D] leading-relaxed font-body">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E4E6F0] flex items-center justify-between text-xs font-bold text-[#0E1330] font-body">
                <span>Learn Capability</span>
                <ArrowUpRight className="w-4 h-4 text-[#3D38F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
