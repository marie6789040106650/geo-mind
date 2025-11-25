import { ServiceItem, FAQItem, CaseStudyItem, NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: '核心服务', href: '#services' },
  { label: '知识库', href: '#faq' },
  { label: '成功案例', href: '#cases' },
  { label: '关于我们', href: '#about' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    name: '行业+品牌双知识库搭建',
    description: '建立“行业维基”与“品牌档案”，为 AI 提供最标准的引用素材库，掌握定义权。',
    painPoints: ['AI hallucination', 'Brand misinformation'],
    schemaType: 'Dataset',
    highlight: false,
    priceRange: 'Custom Quote',
  },
  {
    id: 's2',
    name: 'GEO 官网建设/升级',
    description: '将官网升级为 AI 权重的“根服务器”，支持 Schema 标记与极速 SSR 渲染。',
    painPoints: ['Low crawl rate', 'Unstructured data'],
    schemaType: 'WebSite',
    highlight: true,
    priceRange: 'Starts at ¥50k',
  },
  {
    id: 's3',
    name: '高权重内容矩阵',
    description: '构建结构化的问题×答案矩阵，直接喂给 ChatGPT、SearchGPT 等主流 AI 引擎。',
    painPoints: ['Low visibility in SGE'],
    schemaType: 'Article',
    highlight: false,
    priceRange: 'Retainer',
  },
  {
    id: 's4',
    name: '全渠道权重分发',
    description: '通过多渠道权威信号强化，持续提升 AI 对您在细分领域的“专家”认知。',
    painPoints: ['Low E-E-A-T score'],
    schemaType: 'Organization',
    highlight: false,
    priceRange: 'Retainer',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'geo-core',
    question: '如何让 AI 优先推荐你？(GEO 关键路径)',
    directAnswer: 'GEO 实施的关键在于四步走：1. 让AI认识你（Schema 结构化确权）；2. 让AI理解你（FAQ 矩阵覆盖决策路径）；3. 让AI相信你（建立 E-E-A-T 证据链）；4. 让AI推荐你（RAG 知识注入）。',
    detailedAnswer: '过去搜索靠 SEO，现在 AI 直接回答问题，答案位即成交入口。当用户问 AI“哪家更靠谱”时，AI 直接点名的品牌就是赢家。我们需要建立清晰的实体身份，积累权威信号，让内容成为 AI 的可信数据源。',
    relatedIntent: ['Strategy', 'Methodology'],
  },
  {
    id: 'f1',
    question: 'GEO 是什么？为什么现在必须做 GEO？',
    directAnswer: 'GEO (Generative Engine Optimization) 是针对 AI 搜索引擎（如 SearchGPT, Google SGE, Perplexity）的优化技术。它是下一代 SEO，旨在让品牌内容被生成式 AI 优先引用。',
    detailedAnswer: '随着用户从传统搜索转向 AI 对话式搜索，流量入口正在重构。不做 GEO，品牌将在新的 AI 流量生态中“隐形”。传统 SEO 关注排名，GEO 关注“被引用”和“唯一答案”。',
    relatedIntent: ['Definition', 'Strategy'],
  },
  {
    id: 'f2',
    question: 'GEO 官网和传统 SEO 官网有什么区别？',
    directAnswer: 'GEO 官网核心在于“结构化数据”和“语义清晰度”。它不仅给人看，更给 AI 爬虫看。',
    detailedAnswer: '传统 SEO 官网侧重关键词堆砌和外链。GEO 官网侧重 Schema.org 标记、实体关系构建、以及直接回答用户意图的内容片段（Snippets）。GEO 官网必须具备极快的加载速度和极高的信息信噪比。',
    relatedIntent: ['Comparison', 'Technical'],
  },
  {
    id: 'f3',
    question: '实施 GEO 需要多久见效？',
    directAnswer: '通常在技术部署后的 4-8 周内可以看到 AI 引用率的提升，但这取决于所在行业的竞争程度。',
    detailedAnswer: '基础的技术改造（如 Schema 注入）立竿见影，但内容矩阵的权重积累需要时间。相比传统 SEO 的 6-12 个月周期，GEO 由于目前竞争者较少，红利期效应更明显。',
    relatedIntent: ['Timeline', 'ROI'],
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'c1',
    clientName: '某 SaaS 企业',
    metricValue: '+300%',
    metricLabel: 'AI 推荐引用率提升',
    description: '通过构建双知识库，在 Perplexity 搜索中的品牌展现量翻了三倍，精准流量显著增加。',
    graphType: 'line',
  },
  {
    id: 'c2',
    clientName: '某工业品牌',
    metricValue: 'Top 1',
    metricLabel: '行业关键词首位推荐',
    description: '帮助某工业品牌重构官网架构，成功抢占“精密制造解决方案”等核心词的 AI 首选生成答案。',
    graphType: 'bar',
  },
];