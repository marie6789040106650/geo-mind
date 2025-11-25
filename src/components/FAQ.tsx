import React, { useState } from 'react';
import { FAQS } from '../constants';
import { GeoNote } from './GeoNote';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>('f1');

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black/40">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <GeoNote label="Area: FAQPage Schema" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white mt-4">AI 决策答案池</h2>
          <p className="text-xl text-gray-400 leading-relaxed">符合 LLM 偏好的结构化语料。</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`bg-dark-800/40 backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-primary-500/30' : 'border-white/5 hover:border-white/20'}`}
              >
                <div 
                  className="w-full flex justify-between items-center p-6 cursor-pointer bg-white/5"
                  onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white/10 text-primary-400' : 'bg-white/5 text-gray-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
                
                {isOpen && (
                  <div className="p-6 text-gray-300 space-y-4 text-sm leading-relaxed bg-black/20 animate-fadeIn">
                    <div className="bg-primary-900/30 p-4 rounded-xl border border-primary-500/20">
                      <strong className="text-primary-300 block mb-2 font-mono text-xs uppercase tracking-wider">Direct Answer:</strong>
                      <p className="text-white">{faq.directAnswer}</p>
                    </div>
                    <p>{faq.detailedAnswer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
