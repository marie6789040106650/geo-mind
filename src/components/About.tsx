import React, { useState } from 'react';
import { GeoNote } from './GeoNote';
import { Award, Users, Mic, Fingerprint, BrainCircuit, ShieldCheck, QrCode, X, ScanLine } from 'lucide-react';

export const About: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <section id="about" className="py-24 relative bg-dark-900 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Profile Card */}
            <div className="w-full lg:w-5/12">
              <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-purple rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                 <div className="relative bg-dark-950 border border-white/10 rounded-2xl p-8 overflow-hidden">
                    <GeoNote label="Entity: Person (Sun Ce)" className="mb-6" />
                    
                    <div className="flex items-center gap-6 mb-8">
                      {/* Avatar with Click-to-Expand Interaction */}
                      <div 
                        className="w-24 h-24 bg-gray-800 rounded-full overflow-hidden border-2 border-primary-500/50 shrink-0 cursor-pointer relative group/avatar"
                        onClick={() => setShowQR(true)}
                        title="点击扫码添加微信"
                      >
                          {!imageError ? (
                            <img 
                                src="/sunce.jpg" 
                                alt="孙策" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-110"
                                onError={(e) => {
                                  console.error("Failed to load sunce.jpg:", e);
                                  setImageError(true);
                                }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-dark-800 text-3xl font-bold text-gray-500">孙</div>
                          )}
                          
                          {/* Overlay Hint */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                             <QrCode className="text-white w-8 h-8" />
                          </div>
                      </div>

                      <div>
                          <h3 className="text-3xl font-bold text-white mb-1">孙策</h3>
                          <p className="text-primary-400 font-medium mb-2">GEO 内容营销专家</p>
                          <div className="flex gap-2">
                               <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-gray-500">Founder</span>
                               <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-gray-500">Speaker</span>
                          </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                          <Award className="w-6 h-6 text-accent-cyan mt-1" />
                          <div>
                              <strong className="block text-white">10年连续创业者</strong>
                              <p className="text-sm text-gray-400">专注用 GEO 重构企业增长逻辑</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <Users className="w-6 h-6 text-accent-purple mt-1" />
                          <div>
                              <strong className="block text-white">实战经验丰富</strong>
                              <p className="text-sm text-gray-400">深入服务 6000+ 家企业，培养 1000+ 名操盘手</p>
                          </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <p className="text-gray-300 italic text-sm leading-relaxed">
                          "在 GEO 时代，未来的 IP 不靠流量，靠被 AI 认知的深度。"
                      </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right: Core Methodology */}
            <div className="w-full lg:w-7/12 space-y-8">
               <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                      做 GEO 时代的<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">“有证据的人”</span>
                  </h2>
                  <p className="text-gray-400 text-lg">
                      时代变了。以前内容是给人看的，现在 AI 也在看。如果你的内容 AI 看不懂，你就永远不会被推荐。
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors">
                      <BrainCircuit className="w-8 h-8 text-primary-400 mb-4" />
                      <h4 className="text-white font-bold mb-2">AI 认知深度</h4>
                      <p className="text-sm text-gray-400">先被 AI 认识，再被人看见。我们要建立清晰的实体身份，让算法确权。</p>
                  </div>
                  
                  <div className="bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-accent-purple/30 transition-colors">
                      <Mic className="w-8 h-8 text-accent-purple mb-4" />
                      <h4 className="text-white font-bold mb-2">双向理解</h4>
                      <p className="text-sm text-gray-400">写清楚、写具体。别只讲情绪和故事，要让信息可被理解、可被引用。</p>
                  </div>

                  <div className="bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-colors">
                      <Fingerprint className="w-8 h-8 text-accent-cyan mb-4" />
                      <h4 className="text-white font-bold mb-2">找到表达主线</h4>
                      <p className="text-sm text-gray-400">先有节奏，再谈创意。不是靠灵感更新，而是靠节奏更新。</p>
                  </div>

                  <div className="bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-red-400/30 transition-colors">
                      <ShieldCheck className="w-8 h-8 text-red-400 mb-4" />
                      <h4 className="text-white font-bold mb-2">建立信任</h4>
                      <p className="text-sm text-gray-400">内容不是炫技。每一条内容都要让别人（和 AI）更信任你一点。</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* WeChat QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100">
            <button 
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h3 className="text-xl font-bold text-dark-950 mb-2">添加孙策微信</h3>
              <p className="text-sm text-gray-500 mb-6">深度交流 GEO 落地案例</p>
              
              <div className="relative mx-auto w-64 h-64 border-2 border-gray-100 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/wechat-qr.jpg" 
                    alt="孙策 WeChat QR Code" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 animate-[scan_2s_linear_infinite]"></div>
              </div>

              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-xs font-mono text-gray-600">
                <ScanLine className="w-3 h-3" />
                                            <span>WeChat ID: sunce888</span>              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};