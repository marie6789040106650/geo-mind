import React, { useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SchemaScript } from './components/SchemaScript';
import { Analytics } from './components/Analytics';
import { SERVICES, FAQS } from './constants';

function App() {
  // Construct Schema Data using useMemo to prevent unnecessary re-renders of SchemaScript
  const websiteSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GEO Mind",
    "url": "https://geomind.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://geomind.ai/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }), []);

  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GEO Mind",
    "url": "https://geomind.ai",
    "logo": "https://geomind.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@geomind.ai",
      "contactType": "customer service"
    }
  }), []);

  // Person Schema for E-E-A-T (Expertise, Authoritativeness, Trustworthiness)
  const personSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "孙策",
    "jobTitle": "GEO 内容营销专家",
    "description": "10年连续创业者，专注用GEO重构企业的增长。深入服务6000+企业。",
    "url": "https://geomind.ai/#about",
    "image": "https://geomind.ai/sunce.jpg",
    "sameAs": [
        "https://mp.weixin.qq.com/s/zAI8FwBOQzgC1n9Y0Fhw4w"
    ]
  }), []);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.directAnswer
      }
    }))
  }), []);

  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "GEO Mind"
        },
        "serviceType": service.schemaType,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "CNY",
          "price": service.priceRange || "Consultation"
        }
      }
    }))
  }), []);

  // Manage Title, Meta Description, and Open Graph Tags manually
  useEffect(() => {
    // 1. Basic SEO Tags
    document.title = "GEO Mind - Next Gen AI SEO";
    
    const setMeta = (name: string, content: string, attribute: string = 'name') => {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attribute, name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMeta('description', 'Next Gen AI SEO Agency specializing in Generative Engine Optimization (GEO). We help brands become the top answer in AI search engines like ChatGPT, Perplexity, and Google SGE.');
    setMeta('keywords', 'GEO, AI SEO, Generative Engine Optimization, ChatGPT Optimization, 孙策, 内容营销');

    // 2. Open Graph Tags (for WeChat/LinkedIn sharing)
    setMeta('og:title', 'GEO Mind - 让 AI 主动推荐你的品牌', 'property');
    setMeta('og:description', '专注于生成式引擎优化 (GEO)。我们帮助品牌重构内容资产，成为 ChatGPT 和 Google SGE 的首选答案。', 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', 'https://geomind.ai', 'property');
    setMeta('og:image', 'https://geomind.ai/sunce.jpg', 'property'); // Fallback to founder image for sharing
    setMeta('og:site_name', 'GEO Mind', 'property');

  }, []);

  return (
    <div className="bg-dark-950 min-h-screen text-slate-50 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* Inject JSON-LD & Analytics */}
      <SchemaScript data={websiteSchema} />
      <SchemaScript data={organizationSchema} />
      <SchemaScript data={personSchema} />
      <SchemaScript data={faqSchema} />
      <SchemaScript data={serviceSchema} />
      <Analytics />

      <Header />
      
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <FAQ />
        <About />
        <CaseStudies />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;