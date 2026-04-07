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
    'about.bio2': 'Outside of school, I enjoy playing and watching soccer, and have been a FC Barcelona fan for over 16 years. I also like traveling (visited eight countries), along with photography and FPS games.',

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
    'proj1.cardTitle': 'Personalized Recommendation and Purchase Prediction for Taobao User Behavior',
    'proj1.cardSummary': 'Click to view the full project details.',
    'proj2.cardTitle': 'Building a Personal Website with Claude Code',
    'proj3.cardTitle': 'Complex Network Visualization and Dimensionality Reduction',

    'modal1.title':   'Personalized Recommendation and Purchase Prediction for Taobao User Behavior',
    'modal1.period':  'User Behavior Analytics and Recommendation Modeling',
    'modal1.bullets': '<li>Used Alibaba Tianchi Taobao user behavior dataset (~1.14M users, 26M records) to perform data cleaning and exploratory analysis in Python, including deduplication, missing value analysis, and behavior distribution analysis across clicks, add-to-cart actions, and purchases.</li><li>Built a user-item interaction matrix with weighted behavioral signals and applied matrix factorization to learn latent user and item representations for personalized recommendation.</li><li>Developed downstream purchase prediction and user segmentation based on behavioral features (e.g., click frequency and conversion paths), and evaluated recommendation performance using metrics such as Precision@K and Recall.</li>',
    'modal2.title':   'Building a Personal Website with Claude Code',
    'modal2.period':  'AI-Assisted Frontend Development and Deployment',
    'modal2.bullets': '<li>Built a personal website using Claude Code, breaking the development process into smaller tasks and using sub-agents to handle layout, styling, and content updates.</li><li>Iteratively generated and refined code through multiple rounds of prompting, while reviewing and adjusting outputs to ensure clarity and maintainability.</li><li>Developed the frontend using HTML and CSS, deployed the site via GitHub Pages, and managed updates with Git.</li><li><a href="https://github.com/AAroNZH11/aaron-website" target="_blank" rel="noopener">GitHub Repository</a></li>',
    'modal3.title':   'Complex Network Visualization and Dimensionality Reduction',
    'modal3.period':  'Large-Scale Network Analysis and Visualization',
    'modal3.bullets': '<li>Under the supervision of Professor Xiaobai Sun in Duke Computer Science Department, developed tools for large-scale network data visualization to handle complex network structures with tens of thousands of nodes, including biological networks.</li><li>Applied the SG-t-SNE-pi algorithm for high-dimensional dimensionality reduction and visualization, capturing both local and global network structure to analyze node-edge relationships and latent clustering patterns.</li><li>Built Python interfaces to call the Julia implementation of the core algorithm and contributed to the reusable SGtSNEpiPy toolkit for complex network analysis and visualization.</li><li><a href="https://github.com/CodyQin/SGtSNEpiPy" target="_blank" rel="noopener">GitHub Repository</a></li>',

    'footer.heading': 'Thank you for visiting!',
    'footer.message': "Feel free to reach out if you'd like to connect or collaborate.",
    'footer.cv':      'Download CV'
  },

  zh: {
    'nav.about':       '简介',
    'nav.experiences': '经历',
    'nav.projects':    '项目',
    'nav.contact':     '联系我',
    'lang.toggle':     'EN',

    'hero.name': '欢迎来到钟一骅的个人网站！',
    'hero.role': '数据科学&生物统计 / Vibe Coding爱好者 / 骨灰级足球迷',
    'hero.org':  '目前就读于华盛顿大学 (西雅图)',

    'about.heading': '个人简介',
    'about.bio1': '我目前在华盛顿大学攻读生物统计 (数据科学) 硕士学位，本科毕业于杜克大学和昆山杜克大学，主修计算机科学。我希望用数据科学的方法，帮助解决医疗健康中的实际问题，以帮助更多的人。',
    'about.bio2': '在学习之外，我喜欢踢足球和看球赛，是一名有16年球龄的巴塞罗那球迷；我也热爱旅行，去过八个国家，同时喜欢摄影以及FPS类游戏。',

    'exp.heading': '工作经历',

    'exp1.period':   '2025年6月 – 2025年8月',
    'exp1.location': '中国·深圳',
    'exp1.title':    '数据科学实习生 — 海普洛斯生物科技',
    'exp1.bullets':  '<li>针对 180 例全基因组测序（WGS）样本，基于 Python（Pandas、Joblib）与 R（Tidyverse）开发自动化数据处理管线。通过多进程并行计算实现对 10 万+ 高维片段组学特征的提取、清洗与 Z-score 标准化。</li><li>采用方差过滤与 SelectKBest（基于互信息/卡方检验）等多阶段技术将特征维度从 10 万降至 300 个核心因子。利用 Scikit-learn 构建随机森林模型，并通过五折交叉验证（5-Fold CV）与网格搜索（GridSearch）优化超参数，最终实现 AUC=0.98。在 293 例独立样本上完成外部验证，确保了模型在高噪声生物数据下的泛化能力与稳健性。</li><li>应用实验设计（Experimental Design）框架对比分析癌症组与健康对照组差异。使用 Statsmodels（Python）或 Limma（R）进行显著性检验（T-test/Mann-Whitney U），挖掘具有统计学意义的潜在生物标志物，为早筛产品的版本迭代提供量化决策依据。</li>',

    'exp2.period':   '2024年8月 – 2024年11月',
    'exp2.location': '中国·上海',
    'exp2.title':    '数据分析实习生 — 礼来亚洲基金',
    'exp2.bullets':  '<li>负责跨治疗领域医疗器械的临床数据清洗与探索性分析（EDA）。利用 R（tidyverse/dplyr）整合异构数据源，通过 ggplot2 绘制分布图与相关性散点图，定义并追踪核心有效性指标（Primary Endpoints），实现对产品临床表现的标准化量化。</li><li>运用逻辑回归（Logistic Regression）结合因果推断思路，通过控制患者统计学特征、病程等混杂变量（Confounders），剥离干扰因素以评估医疗器械的真实有效性。</li><li>基于回归分析产出的优势比（Odds Ratio）与置信区间，为医疗器械领域的千万级投资决策提供严谨的科学依据与风险评估报告。</li>',

    'exp3.period':   '2026年3月 – 至今',
    'exp3.location': '美国·西雅图',
    'exp3.title':    '助教 — 华盛顿大学',
    'exp3.bullets':  '<li>由Robin Mejia教授的本科课程 BIOST 310，此课程面向健康科学相关专业的高年级本科生，课程内容主要包括基础统计方法在公共卫生与医学问题中的应用。</li><li>组织讨论课（discussion），引导学生从生物统计学的角度理解和分析实际问题。</li><li>负责批阅每周作业与考试，并协助教授开展课堂相关教学活动。</li>',

    'proj.heading': '我的项目',
    'proj1.cardTitle': '基于淘宝用户行为的个性化推荐与购买预测',
    'proj1.cardSummary': '点击查看完整项目内容。',
    'proj2.cardTitle': '使用Claude Code开发个人网站',
    'proj3.cardTitle': '复杂网络数据可视化与降维分析',

    'modal1.title':   '基于淘宝用户行为的个性化推荐与购买预测',
    'modal1.period':  '用户行为分析与推荐建模',
    'modal1.bullets': '<li>基于阿里淘宝用户行为数据（约114万用户、2600万条记录），使用 Python 完成数据清洗与探索性分析（EDA），包括异常值检测、去重处理、缺失值统计，并对用户行为（点击、加购、购买）进行分布分析与变量相关性研究。</li><li>构建用户-商品交互矩阵（user-item matrix），基于用户行为权重进行建模，使用矩阵分解方法（Matrix Factorization）提取用户与商品的潜在特征，用于个性化推荐建模。</li><li>在推荐模型基础上，进一步构建购买预测模型与用户分群分析，通过行为特征（如点击频率、转化路径等）进行建模，并使用 Precision@K、Recall 等指标评估推荐效果，分析用户行为路径与转化率。</li>',
    'modal2.title':   '使用Claude Code开发个人网站',
    'modal2.period':  'AI 辅助前端开发与部署',
    'modal2.bullets': '<li>基于 Claude Code 构建个人网站，将开发流程拆分为多个子任务，并通过不同 sub-agent 协同完成页面布局、样式设计与内容调整。</li><li>在开发过程中，通过任务拆解与多轮 prompt 交互引导 AI 生成代码，并对结果进行验证与修改，逐步形成稳定的开发流程。</li><li>使用 HTML、CSS 完成前端开发，通过 GitHub Pages 部署网站，并结合 Git 进行版本管理与持续更新。</li><li><a href="https://github.com/AAroNZH11/aaron-website" target="_blank" rel="noopener">GitHub 仓库链接</a></li>',
    'modal3.title':   '复杂网络数据可视化与降维分析',
    'modal3.period':  '大规模网络分析与可视化',
    'modal3.bullets': '<li>在杜克大学计算机系 Xiaobai Sun 教授的指导下，开发用于大规模网络数据可视化的工具，处理包含上万节点的复杂网络结构（如生物网络等）。</li><li>基于 SG-t-SNE-pi 算法进行高维数据降维与可视化，捕捉网络中的局部与全局结构，用于分析节点关系与潜在聚类模式。</li><li>使用 Python 构建接口并调用 Julia 实现的核心算法，参与开发可复用工具包（SGtSNEpiPy），支持复杂网络数据的分析与可视化。</li><li><a href="https://github.com/CodyQin/SGtSNEpiPy" target="_blank" rel="noopener">GitHub 仓库链接</a></li>',

    'footer.heading': '谢谢你的关注！',
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
