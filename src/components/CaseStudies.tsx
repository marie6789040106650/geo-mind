import React from 'react';
import { CASE_STUDIES } from '../constants';

export const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center text-white">数据验证结果</h2>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Case 1 - Line Chart Visual */}
          <div className="flex-1 bg-dark-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 lg:p-10 hover:bg-white/5 transition-all duration-300 group">
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan mb-2 tracking-tighter">
              +300%
            </div>
            <div className="text-xl text-white font-bold mb-6">AI 推荐引用率提升</div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              某 SaaS 企业通过构建双知识库，在 Perplexity 搜索中的品牌展现量翻了三倍，精准流量显著增加。
            </p>
            {/* Simulated Chart */}
            <div className="h-40 bg-dark-950 rounded-2xl border border-white/5 p-4 flex items-end justify-center relative overflow-hidden">
                <div className="sr-only">
                    折线图显示 AI 推荐引用率呈显著上升趋势。起点为基准值，终点达到 +300% 的增长，曲线平滑上升，并在末端有明显突破。
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent"></div>
                <svg className="w-full h-full text-primary-500 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 45 L20 40 L40 35 L60 20 L80 15 L100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                    <circle cx="20" cy="40" r="2" className="fill-primary-500"/>
                    <circle cx="40" cy="35" r="2" className="fill-primary-500"/>
                    <circle cx="60" cy="20" r="2" className="fill-primary-500"/>
                    <circle cx="80" cy="15" r="2" className="fill-primary-500"/>
                    <circle cx="100" cy="5" r="2" className="fill-white"/>
                </svg>
            </div>
          </div>

          {/* Case 2 - Bar Chart Visual */}
          <div className="flex-1 bg-dark-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 lg:p-10 hover:bg-white/5 transition-all duration-300 group">
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-pink-400 mb-2 tracking-tighter">
              Top 1
            </div>
            <div className="text-xl text-white font-bold mb-6">行业关键词首位推荐</div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              帮助某工业品牌重构官网架构，成功抢占“精密制造解决方案”等核心词的 AI 首选生成答案。
            </p>
             <div className="h-40 bg-dark-950 rounded-2xl border border-white/5 p-6 flex flex-col justify-center relative overflow-hidden">
                <div className="sr-only">
                    柱状图对比：优化前在 SearchGPT 排名 10+，优化后跃升至 Top 1。图表高亮显示了“Top 1”状态的绝对优势。
                </div>
                <div className="space-y-3" aria-hidden="true">
                    <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                        <div className="h-2 w-1/3 bg-gray-800 rounded"></div>
                    </div>
                     <div className="h-16 w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-white/5 p-2 flex flex-col justify-center">
                        <div className="h-2 w-3/4 bg-accent-purple/30 rounded mb-2"></div>
                        <div className="h-2 w-1/2 bg-gray-700/50 rounded"></div>
                     </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};