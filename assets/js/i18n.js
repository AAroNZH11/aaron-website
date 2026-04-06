var translations = {
  en: {
    'nav.about':       'About',
    'nav.experiences': 'Experiences',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',
    'lang.toggle':     '中',

    'hero.name': 'Aaron Zhong',
    'hero.role': 'Data Science & Biostatistics',
    'hero.org':  'University of Washington, Seattle',

    'about.heading': 'About Me',
    'about.bio1': 'I am currently a graduate student in Biostatistics at the University of Washington. I earned my B.S. in Computer Science from Duke University and Duke Kunshan University. My academic interests lie at the intersection of data science and public health, with a focus on applying statistical methods to real-world health problems.',
    'about.bio2': 'I am currently serving as a teaching assistant for BIOST 310: Biostatistics for the Health Sciences, supervised by Prof. Robin Mejia, where I lead discussion sections and support students in understanding core statistical concepts.',

    'exp.heading': 'Experiences',

    'exp1.period':   'June 2025 \u2013 Aug 2025',
    'exp1.location': 'Shenzhen, China',
    'exp1.title':    'Data Scientist Intern \u2014 Haplox Biotechnology',
    'exp1.bullets':  '<li>Architected an end-to-end genomic pipeline via SQL/Python for early lung cancer diagnostics, multiprocessing 1K+ samples and 100K+ features, reducing preprocessing time by 40%.</li><li>Streamlined high-dimensional biological datasets from 100K+ down to ~300 prognostic features using variance thresholds and mutual information SelectKBest algorithms.</li><li>Deployed a Random Forest diagnostic model with rigorous cross-validation via scikit-learn, achieving AUC of 0.98 to identify top genomic predictors from fragmented sequence data.</li><li>Designed Tableau dashboards to monitor prediction distributions across healthy and cancerous cohorts, guiding iterative feature refinement.</li>',

    'exp2.period':   'Aug 2024 \u2013 Nov 2024',
    'exp2.location': 'Shanghai, China',
    'exp2.title':    'Data Analyst Intern \u2014 Lilly Asia Ventures',
    'exp2.bullets':  '<li>Evaluated early-stage investment viability for medical device portfolios via EDA on 50+ variables, assessing funding history and valuation trends to dictate capital allocation strategies.</li><li>Implemented logistic regression models using multi-dimensional company growth and market indicators to quantify product commercialization probability and mitigate financial risk.</li><li>Designed Tableau visualizations to track competitive market share and long-term financial projections, streamlining scenario analysis for executive-level due diligence.</li>',

    'exp3.period':   'Current',
    'exp3.location': 'Seattle, WA',
    'exp3.title':    'Teaching Assistant \u2014 BIOST 310, University of Washington',
    'exp3.bullets':  '<li>Lead discussion sections for Biostatistics for the Health Sciences, supervised by Prof. Robin Mejia.</li><li>Support students in understanding core statistical concepts including hypothesis testing, regression, and data interpretation.</li>',

    'proj.heading': 'Projects',

    'modal1.title':   'Modeling Healthcare Expenditure in Aging Populations',
    'modal1.period':  'Aug 2024 \u2013 Mar 2025',
    'modal1.bullets': '<li>Structured rigorous datasets to model national healthcare expenditure trends in aging populations, cleaning 10K+ China Family Panel Studies (CFPS) observations using Stata and standardizing income, insurance coverage, and other socioeconomic variables.</li><li>Quantified the macroeconomic relationship between population aging and rising healthcare expenditures by applying multivariate regression frameworks, controlling for demographic and socioeconomic covariates to deliver data-driven policy insights.</li>',

    'modal2.title':   'Large-Scale Network Visualization Using SG-t-SNE Graph Embedding',
    'modal2.period':  'Jul 2023 \u2013 Jan 2024',
    'modal2.bullets': '<li>Processed sparse graph datasets containing 50K+ nodes via Python NetworkX to prepare complex adjacency matrices for advanced embedding analysis and large-scale graph visualization.</li><li>Integrated SG-t-SNE graph embeddings using a Python-Julia interface (SGtSNEpi) and mapped massive networks into navigable 2D/3D spaces to empower structural visual analytics.</li>',

    'footer.heading': 'Thank you for visiting!',
    'footer.message': "Feel free to reach out if you'd like to connect or collaborate.",
    'footer.cv':      'Download CV'
  },

  zh: {
    'nav.about':       '关于我',
    'nav.experiences': '经历',
    'nav.projects':    '项目',
    'nav.contact':     '联系',
    'lang.toggle':     'EN',

    'hero.name': '钟一骅',
    'hero.role': '数据科学 & 生物统计',
    'hero.org':  '华盛顿大学',

    'about.heading': '关于我',
    'about.bio1': '我目前是华盛顿大学生物统计专业的研究生。我在杜克大学及昆山杜克大学获得计算机科学学士学位。我的学术兴趣在于数据科学与公共卫生的交叉领域，专注于将统计方法应用于现实健康问题。',
    'about.bio2': '我目前担任 BIOST 310：健康科学生物统计学的助教，由 Robin Mejia 教授指导，负责带领讨论课并帮助学生理解核心统计概念。',

    'exp.heading': '经历',

    'exp1.period':   '2025年6月 – 2025年8月',
    'exp1.location': '中国·深圳',
    'exp1.title':    '数据科学实习生 — 赛哲生物科技',
    'exp1.bullets':  '<li>通过 SQL/Python 构建端到端基因组数据流水线，用于早期肺癌诊断，多进程处理 1000+ 样本与 10 万+ 特征，将预处理时间缩短 40%。</li><li>利用方差阈值与互信息 SelectKBest 算法，将高维生物数据集从 10 万+ 维度精简至约 300 个预后特征。</li><li>使用 scikit-learn 部署随机森林诊断模型，经严格交叉验证，AUC 达 0.98，从片段序列数据中识别关键基因组预测因子。</li><li>设计 Tableau 仪表盘，监控健康与癌症队列的预测分布，指导特征迭代优化。</li>',

    'exp2.period':   '2024年8月 – 2024年11月',
    'exp2.location': '中国·上海',
    'exp2.title':    '数据分析实习生 — 礼来亚洲创投',
    'exp2.bullets':  '<li>对 50+ 变量进行探索性数据分析，评估医疗器械投资组合的早期投资可行性，分析融资历史与估值趋势，为资本配置策略提供依据。</li><li>利用公司多维成长指标与市场指标建立逻辑回归模型，量化产品商业化概率，降低财务风险。</li><li>设计 Tableau 可视化图表，追踪竞争性市场份额与长期财务预测，为高管层尽调的情景分析提供支持。</li>',

    'exp3.period':   '至今',
    'exp3.location': '美国·西雅图',
    'exp3.title':    '助教 — BIOST 310，华盛顿大学',
    'exp3.bullets':  '<li>负责健康科学生物统计学讨论课，由 Robin Mejia 教授指导。</li><li>帮助学生理解核心统计概念，包括假设检验、回归分析与数据解读。</li>',

    'proj.heading': '项目',

    'modal1.title':   '老龄化人口医疗支出建模',
    'modal1.period':  '2024年8月 – 2025年3月',
    'modal1.bullets': '<li>构建严格的数据集，对老龄化人口的全国医疗支出趋势进行建模，使用 Stata 清洗 10,000+ 条中国家庭追踪调查（CFPS）数据，并对收入、保险覆盖率等社会经济变量进行标准化处理。</li><li>通过多变量回归框架，控制人口与社会经济协变量，量化人口老龄化与医疗支出上升之间的宏观经济关系，提供数据驱动的政策建议。</li>',

    'modal2.title':   '基于 SG-t-SNE 图嵌入的大规模网络可视化',
    'modal2.period':  '2023年7月 – 2024年1月',
    'modal2.bullets': '<li>通过 Python NetworkX 处理包含 50,000+ 节点的稀疏图数据集，为复杂邻接矩阵的高级嵌入分析与大规模图可视化做准备。</li><li>通过 Python-Julia 接口（SGtSNEpi）集成 SG-t-SNE 图嵌入算法，将大规模网络映射到可导航的二维/三维空间，支持结构化视觉分析。</li>',

    'footer.heading': '感谢您的到访！',
    'footer.message': '如有合作或交流的兴趣，欢迎随时联系我。',
    'footer.cv':      '下载简历'
  }
};

function applyLanguage(lang) {
  var t = translations[lang];
  if (!t) return;

  // plain text replacements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // html replacements (for lists, titles with dashes, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  localStorage.setItem('lang', lang);

  // update html lang attribute for accessibility
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function toggleLanguage() {
  var current = localStorage.getItem('lang') || 'en';
  applyLanguage(current === 'en' ? 'zh' : 'en');
}

document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);
});
