import React from 'react';
import { ShieldAlert, Database, LockKeyhole } from 'lucide-react';
import { GeoNote } from './GeoNote';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <GeoNote label="Intent: Pain Points Cluster" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white mt-4">
            为什么你的品牌总是被 AI <span className="text-gray-500 line-through decoration-red-500 decoration-2 px-2">无视</span>？
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">不是内容不够好，而是代码语言不通。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-dark-800/40 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/5 transition duration-300 group relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="w-14 h-14 bg-dark-800 rounded-xl mb-6 flex items-center justify-center border border-white/10 group-hover:border-red-500/50 transition-colors">
              <Database className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">缺乏结构化数据</h3>
            <p className="text-gray-400 text-sm leading-relaxed">官网只有散乱的图片和文字，AI 爬虫面对的是一堆无法提取的非结构化信息。</p>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-dark-800/40 backdrop-blur-lg p-8 rounded-2xl border border-primary-500/50 relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)] group">
            <div className="absolute top-0 right-0 bg-primary-600 text-white text-[0.65rem] font-bold px-3 py-1 rounded-bl-lg tracking-wider">CRITICAL</div>
            <div className="w-14 h-14 bg-primary-900/50 rounded-xl mb-6 flex items-center justify-center border border-primary-500/30 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-7 h-7 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-300">不懂用户提问逻辑</h3>
            <p className="text-gray-300 text-sm leading-relaxed">你的内容与用户向 AI 提问的 Prompt (提示词) 意图不匹配，导致召回率极低。</p>
          </div>

          {/* Card 3 */}
          <div className="bg-dark-800/40 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/5 transition duration-300 group relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="w-14 h-14 bg-dark-800 rounded-xl mb-6 flex items-center justify-center border border-white/10 group-hover:border-orange-500/50 transition-colors">
              <LockKeyhole className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">缺乏权威背书</h3>
            <p className="text-gray-400 text-sm leading-relaxed">没有建立 E-E-A-T（经验、专业、权威、信任）信号，AI 判定信息来源不可信。</p>
          </div>
        </div>
      </div>
    </section>
  );
};
