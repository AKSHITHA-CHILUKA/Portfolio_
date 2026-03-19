/* ============================================================
   data.js — All portfolio content in one place
   Edit this file to update your portfolio content
   ============================================================ */

const PORTFOLIO_DATA = {

  personal: {
    name:       'Akshitha Chiluka',
    initials:   'AC',
    role:       'Software Engineer & AI Enthusiast',
    tagline:    'Optum TDP Associate · Joining 2026',
    email:      'chiluka.akshitha05@gmail.com',
    phone:      '+91 78010 40180',
    location:   'Hyderabad, India',
    cgpa:       '8.24',
    college:    'BVRIT Hyderabad College of Engineering for Women',
    branch:     'B.Tech Information Technology · 2022–2026',
    iit:        'B.Sc. Data Science · IIT Madras · Foundation Completed',
  },

  social: {
    github:    'https://github.com/akshitha-chiluka',
    linkedin:  'https://linkedin.com/in/akshitha-chiluka',
    twitter:   'https://twitter.com/',      // update with real handle
    instagram: 'https://instagram.com/',    // update with real handle
  },

  skills: {
    languages: [
      { name: 'Python',      pct: 90 },
      { name: 'Java',        pct: 78 },
      { name: 'SQL',         pct: 82 },
      { name: 'JavaScript',  pct: 72 },
      { name: 'C',           pct: 68 },
    ],
    ai: [
      { name: 'Generative AI / LLMs', pct: 88 },
      { name: 'Machine Learning',      pct: 85 },
      { name: 'Data Analysis',         pct: 80 },
      { name: 'GPT-4 API',             pct: 83 },
      { name: 'IoT Systems',           pct: 70 },
    ],
    cloud: [
      { name: 'Microsoft Azure',   pct: 80 },
      { name: 'Docker / Podman',   pct: 72 },
      { name: 'GitHub Actions',    pct: 75 },
      { name: 'Kafka / Databricks',pct: 65 },
      { name: 'AEP / MarTech',     pct: 70 },
    ],
    web: [
      { name: 'HTML / CSS',    pct: 85 },
      { name: 'React / Node',  pct: 72 },
      { name: 'Git / GitHub',  pct: 90 },
      { name: 'Cybersecurity', pct: 68 },
      { name: 'Flutter (UI)',  pct: 62 },
    ],
  },

  projects: [
    {
      type:     'project',
      sortKey:  '2025-08',
      date:     'Jun – Aug 2025',
      org:      'Optum',
      num:      '01',
      featured: true,
      title:    'AiTestStream',
      desc:     'GenAI-powered automated testing framework at Optum. Generates test cases and validates cross-system streaming data using GPT-4. Deployed on Azure via Docker & Podman, integrated with Adobe Experience Platform.',
      outcomes: [
        'Built GenAI-powered automated test case generation for enterprise workflows',
        'Validated cross-system streaming data with GPT-4 driven checks',
        'Deployed on Azure with Docker and Podman for production-like runs',
      ],
      tags:     ['GPT-4', 'Azure', 'Kafka', 'Databricks', 'AEP', 'Docker'],
      link:     null,
      linkText: 'Optum ↗',
    },
    {
      type:     'project',
      sortKey:  '2025-01',
      date:     'Oct 2024 – Jan 2025',
      org:      'Infosys Springboard',
      num:      '02',
      featured: false,
      title:    'GlucoSense — AI Diabetes Detection',
      desc:     'AI-powered early intervention system for diabetes prediction. ML model analyses lifestyle & health data. Built as Project Lead during Infosys Springboard internship.',
      outcomes: [
        'Built an ML system for early diabetes risk prediction',
        'Led project execution and model experimentation as Project Lead',
        'Converted health and lifestyle signals into actionable predictions',
      ],
      tags:     ['Python', 'Scikit-learn', 'ML'],
      link:     'https://github.com/akshitha-chiluka/Diabetes-Detection',
      linkText: 'GitHub ↗',
    },
    {
      type:     'project',
      sortKey:  '2024-11',
      date:     '2024',
      org:      'Academic / Personal',
      num:      '03',
      featured: false,
      title:    'Lungs Breath — Respiratory Analyzer',
      desc:     'IoT-enabled real-time respiratory health monitoring for early detection of lung conditions. Cloud + embedded sensors for continuous health analytics.',
      outcomes: [
        'Built real-time respiratory monitoring with IoT sensors',
        'Enabled cloud-backed health analytics for continuous tracking',
        'Designed for early warning on potential lung conditions',
      ],
      tags:     ['IoT', 'Python', 'Cloud', 'Embedded'],
      link:     'https://github.com/akshitha-chiluka/lungs-breath-respiratory-health-analyzer',
      linkText: 'GitHub ↗',
    },
    {
      type:     'project',
      sortKey:  '2024-09',
      date:     '2024',
      org:      'Academic / Personal',
      num:      '04',
      featured: false,
      title:    'Predicting Multivitamin Purchase',
      desc:     'End-to-end ML pipeline: Selenium scrapes 1mg, classification models deployed on Azure predict consumer purchase intent.',
      outcomes: [
        'Scraped e-commerce data from 1mg using Selenium automation',
        'Built and evaluated purchase-intent classification models',
        'Deployed predictions on Azure for end-to-end usage',
      ],
      tags:     ['ML', 'Selenium', 'Azure', 'Web Scraping'],
      link:     'https://github.com/akshitha-chiluka/predicting-multivitamin-purchase',
      linkText: 'GitHub ↗',
    },
  ],

  experience: [
    {
      type:    'internship',
      sortKey: '2025-08',
      date:    'Jun – Aug 2025',
      company: 'Optum',
      role:    'TDP Intern · MarTech Domain',
      bullets: [
        'Built AiTestStream — GenAI automated test case generation framework',
        'Validated AEP data flows using GPT-4; deployed to Azure via Docker + ACR',
        'Received Pre-Placement Offer as TDP Associate joining 2026',
      ],
    },
    {
      type:    'internship',
      sortKey: '2025-10',
      date:    'Jul – Oct 2025',
      company: 'PING Digital',
      role:    'Intern · Data & Operations',
      bullets: [
        'Data sorting, recruiting pipeline management and reporting',
        'Cross-functional work in a fast-paced media-tech environment',
      ],
    },
    {
      type:    'internship',
      sortKey: '2025-01',
      date:    'Oct 2024 – Jan 2025',
      company: 'Infosys',
      role:    'AI Project Intern · Project Lead',
      bullets: [
        'Led team building GlucoSense — AI diabetes detection system',
        'Pragati: Path to Future Cohort 2 at Infosys Hyderabad DC',
      ],
    },
    {
      type:    'internship',
      sortKey: '2024-11',
      date:    'May – Nov 2024',
      company: 'GSSoC',
      role:    'Community Manager & Top Contributor',
      bullets: [
        'Top Contributor — multiple open-source projects',
        'Community Manager for GSSoC Extended 2024 (Oct–Nov)',
      ],
    },
  ],

  achievements: [
    { icon: '✦', title: 'Optum TDP Associate — PPO',          sub: 'Pre-Placement Offer · UnitedHealth Group · 2025' },
    { icon: '◈', title: 'Top 0.1% Mentor — Topmate.io',       sub: 'Badge Unlocked · June 2025' },
    { icon: '◻', title: 'Google India Girl Hackathon',         sub: 'Advanced to Round 2 · March 2025' },
    { icon: '✦', title: "GSSoC'24 Top Contributor",           sub: 'GirlScript Foundation · August 2024' },
    { icon: '◈', title: 'B.Sc. Data Science — IIT Madras',    sub: 'Foundation Level · Dec 2024' },
    { icon: '◻', title: 'GDG On Campus Solution Challenge',    sub: 'Certificate of Achievement · Aug 2025' },
    { icon: '✦', title: 'Global Hack Week — Open Source',      sub: 'Major League Hacking · October 2025' },
    { icon: '◈', title: 'Next Gen Tech Booster — Bertelsmann', sub: 'Udacity Scholarship Recipient · 2024' },
    { icon: '◻', title: 'Java Full Stack with React & AI',     sub: 'National STTP · AICTE · 2024' },
    { icon: '✦', title: 'GenAI 101 — Pieces for Developers',   sub: 'Badge + Swag Recognition · Nov 2024' },
    { icon: '◈', title: 'National Financial Literacy Quiz',    sub: 'NISM Certificate · 2025' },
    { icon: '◻', title: 'Acoustic Guitar — Level 1',           sub: 'SIFM · BVRIT · 2023' },
  ],

};

// Make available globally
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
