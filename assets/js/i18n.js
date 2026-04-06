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
    'nav.about':       '\u5173\u4e8e\u6211',
    'nav.experiences': '\u7ecf\u5386',
    'nav.projects':    '\u9879\u76ee',
    'nav.contact':     '\u8054\u7cfb',
    'lang.toggle':     'EN',

    'hero.name': '\u949f\u4e00\u9a45',
    'hero.role': '\u6570\u636e\u79d1\u5b66 & \u751f\u7269\u7edf\u8ba1',
    'hero.org':  '\u534e\u76db\u987f\u5927\u5b66',

    'about.heading': '\u5173\u4e8e\u6211',
    'about.bio1': '\u6211\u76ee\u524d\u662f\u534e\u76db\u987f\u5927\u5b66\u751f\u7269\u7edf\u8ba1\u4e13\u4e1a\u7684\u7814\u7a76\u751f\u3002\u6211\u5728\u676e\u514b\u5927\u5b66\u53ca\u6606\u5c71\u676e\u514b\u5927\u5b66\u83b7\u5f97\u8ba1\u7b97\u673a\u79d1\u5b66\u5b66\u58eb\u5b66\u4f4d\u3002\u6211\u7684\u5b66\u672f\u5174\u8da3\u5728\u4e8e\u6570\u636e\u79d1\u5b66\u4e0e\u516c\u5171\u536b\u751f\u7684\u4ea4\u53c9\u9886\u57df\uff0c\u4e13\u6ce8\u4e8e\u5c06\u7edf\u8ba1\u65b9\u6cd5\u5e94\u7528\u4e8e\u73b0\u5b9e\u5065\u5eb7\u95ee\u9898\u3002',
    'about.bio2': '\u6211\u76ee\u524d\u62c5\u4efb BIOST 310\uff1a\u5065\u5eb7\u79d1\u5b66\u751f\u7269\u7edf\u8ba1\u5b66\u7684\u52a9\u6559\uff0c\u7531 Robin Mejia \u6559\u6388\u6307\u5bfc\uff0c\u8d1f\u8d23\u5e26\u9886\u8ba8\u8bba\u8bfe\u5e76\u5e2e\u52a9\u5b66\u751f\u7406\u89e3\u6838\u5fc3\u7edf\u8ba1\u6982\u5ff5\u3002',

    'exp.heading': '\u7ecf\u5386',

    'exp1.period':   '2025\u5e746\u6708 \u2013 2025\u5e748\u6708',
    'exp1.location': '\u4e2d\u56fd\u00b7\u6df1\u5733',
    'exp1.title':    '\u6570\u636e\u79d1\u5b66\u5b9e\u4e60\u751f \u2014 \u8d5b\u54f2\u751f\u7269\u79d1\u6280',
    'exp1.bullets':  '<li>\u901a\u8fc7 SQL/Python \u6784\u5efa\u7aef\u5230\u7aef\u57fa\u56e0\u7ec4\u6570\u636e\u6d41\u6c34\u7ebf\uff0c\u7528\u4e8e\u65e9\u671f\u80ba\u764c\u8bca\u65ad\uff0c\u591a\u8fdb\u7a0b\u5904\u7406 1000+ \u6837\u672c\u4e0e 10 \u4e07+ \u7279\u5f81\uff0c\u5c06\u9884\u5904\u7406\u65f6\u95f4\u7f29\u77ed 40%\u3002</li><li>\u5229\u7528\u65b9\u5dee\u9608\u503c\u4e0e\u4e92\u4fe1\u606f SelectKBest \u7b97\u6cd5\uff0c\u5c06\u9ad8\u7ef4\u751f\u7269\u6570\u636e\u96c6\u4ece 10 \u4e07+ \u7ef4\u5ea6\u7cbe\u7b80\u81f3\u7ea6 300 \u4e2a\u9884\u540e\u7279\u5f81\u3002</li><li>\u4f7f\u7528 scikit-learn \u90e8\u7f72\u968f\u673a\u68ee\u6797\u8bca\u65ad\u6a21\u578b\uff0c\u7ecf\u4e25\u683c\u4ea4\u53c9\u9a8c\u8bc1\uff0cAUC \u8fbe 0.98\uff0c\u4ece\u7247\u6bb5\u5e8f\u5217\u6570\u636e\u4e2d\u8bc6\u522b\u5173\u952e\u57fa\u56e0\u7ec4\u9884\u6d4b\u56e0\u5b50\u3002</li><li>\u8bbe\u8ba1 Tableau \u4ed3\u8868\u76d8\uff0c\u76d1\u63a7\u5065\u5eb7\u4e0e\u764c\u75c7\u961f\u5217\u7684\u9884\u6d4b\u5206\u5e03\uff0c\u6307\u5bfc\u7279\u5f81\u8fed\u4ee3\u4f18\u5316\u3002</li>',

    'exp2.period':   '2024\u5e748\u6708 \u2013 2024\u5e7411\u6708',
    'exp2.location': '\u4e2d\u56fd\u00b7\u4e0a\u6d77',
    'exp2.title':    '\u6570\u636e\u5206\u6790\u5b9e\u4e60\u751f \u2014 \u793c\u6765\u4e9a\u6d32\u521b\u6295',
    'exp2.bullets':  '<li>\u5bf9 50+ \u53d8\u91cf\u8fdb\u884c\u63a2\u7d22\u6027\u6570\u636e\u5206\u6790\uff0c\u8bc4\u4f30\u533b\u7597\u5668\u68b0\u6295\u8d44\u7ec4\u5408\u7684\u65e9\u671f\u6295\u8d44\u53ef\u884c\u6027\uff0c\u5206\u6790\u878d\u8d44\u5386\u53f2\u4e0e\u4f30\u503c\u8d8b\u52bf\uff0c\u4e3a\u8d44\u672c\u914d\u7f6e\u7b56\u7565\u63d0\u4f9b\u4f9d\u636e\u3002</li><li>\u5229\u7528\u516c\u53f8\u591a\u7ef4\u6210\u957f\u6307\u6807\u4e0e\u5e02\u573a\u6307\u6807\u5efa\u7acb\u903b\u8f91\u56de\u5f52\u6a21\u578b\uff0c\u91cf\u5316\u4ea7\u54c1\u5546\u4e1a\u5316\u6982\u7387\uff0c\u964d\u4f4e\u8d22\u52a1\u98ce\u9669\u3002</li><li>\u8bbe\u8ba1 Tableau \u53ef\u89c6\u5316\u56fe\u8868\uff0c\u8ffd\u8e2a\u7ade\u4e89\u6027\u5e02\u573a\u4efd\u989d\u4e0e\u957f\u671f\u8d22\u52a1\u9884\u6d4b\uff0c\u4e3a\u9ad8\u7ba1\u5c42\u5c3d\u8c03\u67e5\u7684\u60c5\u666f\u5206\u6790\u63d0\u4f9b\u652f\u6301\u3002</li>',

    'exp3.period':   '\u81f3\u4eca',
    'exp3.location': '\u7f8e\u56fd\u00b7\u897f\u96c5\u56fe',
    'exp3.title':    '\u52a9\u6559 \u2014 BIOST 310\uff0c\u534e\u76db\u987f\u5927\u5b66',
    'exp3.bullets':  '<li>\u8d1f\u8d23\u5065\u5eb7\u79d1\u5b66\u751f\u7269\u7edf\u8ba1\u5b66\u8ba8\u8bba\u8bfe\uff0c\u7531 Robin Mejia \u6559\u6388\u6307\u5bfc\u3002</li><li>\u5e2e\u52a9\u5b66\u751f\u7406\u89e3\u6838\u5fc3\u7edf\u8ba1\u6982\u5ff5\uff0c\u5305\u62ec\u5047\u8bbe\u68c0\u9a8c\u3001\u56de\u5f52\u5206\u6790\u4e0e\u6570\u636e\u89e3\u8bfb\u3002</li>',

    'proj.heading': '\u9879\u76ee',

    'modal1.title':   '\u8001\u9f84\u5316\u4eba\u53e3\u533b\u7597\u652f\u51fa\u5efa\u6a21',
    'modal1.period':  '2024\u5e748\u6708 \u2013 2025\u5e743\u6708',
    'modal1.bullets': '<li>\u6784\u5efa\u4e25\u683c\u7684\u6570\u636e\u96c6\uff0c\u5bf9\u8001\u9f84\u5316\u4eba\u53e3\u7684\u5168\u56fd\u533b\u7597\u652f\u51fa\u8d8b\u52bf\u8fdb\u884c\u5efa\u6a21\uff0c\u4f7f\u7528 Stata \u6e05\u6d17 10,000+ \u6761\u4e2d\u56fd\u5bb6\u5ead\u8ffd\u8e2a\u8c03\u67e5\uff08CFPS\uff09\u6570\u636e\uff0c\u5e76\u5bf9\u6536\u5165\u3001\u4fdd\u9669\u8986\u76d6\u7387\u7b49\u793e\u4f1a\u7ecf\u6d4e\u53d8\u91cf\u8fdb\u884c\u6807\u51c6\u5316\u5904\u7406\u3002</li><li>\u901a\u8fc7\u591a\u53d8\u91cf\u56de\u5f52\u6846\u67b6\uff0c\u63a7\u5236\u4eba\u53e3\u4e0e\u793e\u4f1a\u7ecf\u6d4e\u534f\u53d8\u91cf\uff0c\u91cf\u5316\u4eba\u53e3\u8001\u9f84\u5316\u4e0e\u533b\u7597\u652f\u51fa\u4e0a\u5347\u4e4b\u95f4\u7684\u5b8f\u89c2\u7ecf\u6d4e\u5173\u7cfb\uff0c\u63d0\u4f9b\u6570\u636e\u9a71\u52a8\u7684\u653f\u7b56\u5efa\u8bae\u3002</li>',

    'modal2.title':   '\u57fa\u4e8e SG-t-SNE \u56fe\u5d4c\u5165\u7684\u5927\u89c4\u6a21\u7f51\u7edc\u53ef\u89c6\u5316',
    'modal2.period':  '2023\u5e747\u6708 \u2013 2024\u5e741\u6708',
    'modal2.bullets': '<li>\u901a\u8fc7 Python NetworkX \u5904\u7406\u5305\u542b 50,000+ \u8282\u70b9\u7684\u7a00\u758f\u56fe\u6570\u636e\u96c6\uff0c\u4e3a\u590d\u6742\u90bb\u63a5\u77e9\u9635\u7684\u9ad8\u7ea7\u5d4c\u5165\u5206\u6790\u4e0e\u5927\u89c4\u6a21\u56fe\u53ef\u89c6\u5316\u505a\u51c6\u5907\u3002</li><li>\u901a\u8fc7 Python-Julia \u63a5\u53e3\uff08SGtSNEpi\uff09\u96c6\u6210 SG-t-SNE \u56fe\u5d4c\u5165\u7b97\u6cd5\uff0c\u5c06\u5927\u89c4\u6a21\u7f51\u7edc\u6620\u5c04\u5230\u53ef\u5bfc\u822a\u7684\u4e8c\u7ef4/\u4e09\u7ef4\u7a7a\u95f4\uff0c\u652f\u6301\u7ed3\u6784\u5316\u89c6\u89c9\u5206\u6790\u3002</li>',

    'footer.heading': '\u611f\u8c22\u60a8\u7684\u5230\u8bbf\uff01',
    'footer.message': '\u5982\u6709\u5408\u4f5c\u6216\u4ea4\u6d41\u7684\u5174\u8da3\uff0c\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u6211\u3002',
    'footer.cv':      '\u4e0b\u8f7d\u7b80\u5386'
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
