
import React, { useState } from 'react';
import { GeoNote } from './GeoNote';
import { Terminal, FileText, ArrowUpRight, MessageCircle, ScanLine, QrCode } from 'lucide-react';

export const Footer: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <section id="footer" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-dark-950 via-dark-950 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            准备好让 AI <br/>
            <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">
              主动推荐
            </span>
            你的品牌了吗？
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            建立私域连接，获取您的专属 GEO 诊断方案。
          </p>
          
          {/* CTA Grid Layout: Side by Side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* 1. Featured Article Link (Trust Building) */}
            <a 
              href="https://mp.weixin.qq.com/s/zAI8FwBOQzgC1n9Y0Fhw4w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 text-left h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center border border-primary-500/20 group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-primary-400" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">GEO 实战干货深度解析</h3>
                <p className="text-gray-400 leading-relaxed">
                    不仅是概念，更是落地指南。点击阅读公众号文章，了解我们如何通过底层逻辑重构流量入口。
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-sm text-primary-400 font-medium">
                <span>阅读文章</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* 2. WeChat Contact Card (Direct Action) */}
            <div className="bg-white p-2 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] animate-fadeIn group h-full">
                <div className="bg-white h-full p-6 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Scan Scan Animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
                    
                    <div className="relative">
                        {!imageError ? (
                          <img 
                              src="/wechat-qr.jpg" 
                              alt="孙策 WeChat QR Code" 
                              className="w-48 h-48 md:w-52 md:h-52 object-cover rounded-lg border-2 border-gray-100"
                              onError={() => setImageError(true)}
                          />
                        ) : (
                          <div className="w-48 h-48 md:w-52 md:h-52 bg-gray-100 rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center text-gray-400">
                             <QrCode className="w-12 h-12 mb-2 opacity-50" />
                             <span className="text-xs">二维码加载失败</span>
                          </div>
                        )}
                        <div className="absolute -bottom-3 -right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                            <MessageCircle className="w-5 h-5 fill-current" />
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-dark-950 font-bold text-xl">
                            <span>扫码添加孙策</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">获取 1v1 GEO 诊断与咨询</p>
                        <div className="mt-4 flex items-center gap-2 justify-center text-xs font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                            <ScanLine className="w-3 h-3" />
                            <span>WeChat ID: sunce_geo</span>
                        </div>
                    </div>
                </div>
            </div>

          </div>
          
          <div className="mt-16">
            <GeoNote label="Action: Private Traffic Conversion" className="bg-dark-900 border-dark-800 text-gray-500" />
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-500 py-16 border-t border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Terminal className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl">GEO Mind</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">连接品牌与未来的 AI 流量入口。</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">核心服务</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition">GEO 官网建设</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">双知识库搭建</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">资源中心</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="https://mp.weixin.qq.com/s/zAI8FwBOQzgC1n9Y0Fhw4w" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition">深度解析文章</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">问答库示例</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">联系我们</h5>
            <p className="text-sm">contact@geomind.ai</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-xs text-center flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2024 GEO Mind Agency.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="/sitemap.xml" className="text-primary-500 hover:text-primary-400">sitemap.xml</a>
          </div>
        </div>
      </footer>
    </>
  );
};
