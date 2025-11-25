import React from 'react';
import { ChevronRight, Database, ArrowUpRight } from 'lucide-react';
import { GeoNote } from './GeoNote';

export const Hero: React.FC = () => {
  const scrollToService = () => {
    const element = document.getElementById('services');
    if (element) {
       const headerOffset = 80;
       const elementPosition = element.getBoundingClientRect().top;
       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
       window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
       });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animation-delay-2000 animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <GeoNote label="H1 Tag: 核心业务词" className="mb-6 border-primary-500/30 text-primary-400 bg-primary-500/10" />
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                让 AI 推荐<br />
                <span className="text-gray-400 relative inline-block mr-3">
                    不再是
                    <span className="absolute left-0 top-1/2 w-full h-1 bg-red-500 -rotate-3 rounded-full opacity-80"></span>
                </span>
                <span className="bg-gradient-to-r from-primary-400 via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                  随机事件
                </span>
              </h1>
            </div>
            
            <div className="relative pl-6 border-l-2 border-primary-500/50 bg-primary-500/5 p-6 rounded-r-2xl backdrop-blur-sm">
              <GeoNote label="Direct Answer Snippet" className="absolute -top-3 left-4 !bg-dark-900" />
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                我们帮助品牌构建<span className="text-white font-medium px-1">行业双知识库</span>与<span className="text-white font-medium px-1">高权重官网</span>，从底层重塑 AI 对品牌的认知，让您的品牌成为生成式搜索的“首选答案”。
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToService}
                className="bg-white text-dark-950 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 group"
              >
                查看服务清单
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition flex items-center gap-2">
                查看案例数据
              </button>
            </div>
          </div>

          {/* Visual Content - 3D Card Effect */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-cyan blur-[60px] opacity-20 rounded-full"></div>
            
            <div className="relative bg-dark-800/40 backdrop-blur-xl p-2 rounded-2xl transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out border border-white/10 shadow-2xl shadow-primary-500/10">
              <div className="bg-dark-900/80 rounded-xl overflow-hidden relative aspect-[4/3] flex items-center justify-center border border-white/5 group">
                
                {/* GEO HIDDEN TEXT FOR BOTS */}
                <div className="sr-only">
                    图表描述：一张展示GEO技术原理的架构图。左侧输入端为非结构化品牌数据，经过中间的GEO核心处理层（包含Schema标记、语义增强、知识图谱构建），右侧输出端连接至各大AI搜索引擎（如ChatGPT, Perplexity）。图表展示了如何通过结构化数据提升AI对品牌信息的抓取效率和准确性。
                </div>

                {/* Abstract Tech Grid Background */}
                <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-20 pointer-events-none">
                   {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="col-span-1 border-r border-b border-white/5 h-full"></div>
                   ))}
                </div>

                {/* SVG Illustration */}
                <svg className="w-3/4 h-3/4 text-primary-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" className="fill-primary-500/20 stroke-primary-400"/>
                    <path d="M12 12L7 15M12 12L17 15M12 12V18" stroke="#6366f1" strokeWidth="1"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#818CF8"/>
                            <stop offset="1" stopColor="#22D3EE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="2" y1="17" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C084FC"/>
                            <stop offset="1" stopColor="#818CF8"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="2" y1="12" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#22D3EE"/>
                            <stop offset="1" stopColor="#C084FC"/>
                        </linearGradient>
                    </defs>
                </svg>

                {/* Simulated Alt Tag Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-950/80 backdrop-blur-md p-3 rounded-lg text-xs font-mono border border-primary-500/20 text-primary-200 shadow-lg" aria-hidden="true">
                    <span className="font-bold text-accent-cyan">&lt;img alt="</span>GEO服务原理图：结构化数据与AI抓取<span className="font-bold text-accent-cyan">"&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};