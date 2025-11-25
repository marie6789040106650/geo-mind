import React from 'react';
import { SERVICES } from '../constants';
import { GeoNote } from './GeoNote';
import { Braces, Network, Globe, Share2 } from 'lucide-react';

const icons = {
  s1: Braces,
  s2: Globe,
  s3: Network,
  s4: Share2,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-dark-950">
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <GeoNote label="Schema: Service List" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4">GEO 核心服务体系</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl">从内容资产到底层技术，全方位重构品牌的 AI 友好度。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => {
            const Icon = icons[service.id as keyof typeof icons] || Globe;
            const isHighlight = service.highlight;

            return (
              <div 
                key={service.id}
                className={`p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden backdrop-blur-md ${
                  isHighlight 
                    ? 'border border-primary-500/50 bg-primary-500/5' 
                    : 'bg-dark-800/40 border border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`w-16 h-16 rounded-xl shrink-0 flex items-center justify-center border transition-colors duration-300 ${
                    isHighlight
                      ? 'bg-primary-600 text-white border-transparent shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                      : 'bg-dark-800 border-white/10 text-gray-400 group-hover:text-primary-400 group-hover:border-primary-500/30'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{service.name}</h3>
                    <p className={`${isHighlight ? 'text-primary-100' : 'text-gray-400'} mb-5 text-sm leading-relaxed`}>
                      {service.description}
                    </p>
                    <div className={`mt-6 pt-4 border-t ${isHighlight ? 'border-primary-500/20' : 'border-white/5'}`}>
                      <GeoNote 
                        label={isHighlight ? 'Stack: Astro + Strapi' : `Output: ${service.schemaType} Schema`}
                        className={`${isHighlight ? 'bg-primary-950/50 border-primary-500/30 text-primary-300' : 'bg-dark-950 border-gray-800 text-gray-400'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
