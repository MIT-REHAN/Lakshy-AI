import React, { createContext, useContext, useState, useMemo } from 'react';

const UserContext = createContext();

// ─────────────────────────────────────────────────────────────────────────────
// PW IOI campuses (always shown when relevant)
// ─────────────────────────────────────────────────────────────────────────────
const PW_IOI = {
  name: 'PW Institute of Innovation (PW IOI)',
  location: 'Bangalore, Pune, Indore, Lucknow, Noida, Patna',
  country: 'India',
  type: 'Private',
  rank: 1,
  fees: '₹2–4 LPA',
  rating: 4.9,
  tags: ['Top Pick', 'Recommended', 'Multi-Campus'],
  match: '99%',
  desc: 'Premium residential campuses across 6 cities. Industry-aligned B.Tech, BBA, MBA & Innovation programs.',
  campuses: ['Bangalore', 'Pune', 'Indore', 'Lucknow', 'Noida', 'Patna'],
};

// ─────────────────────────────────────────────────────────────────────────────
// PATHWAYS  — one per career stream
// ─────────────────────────────────────────────────────────────────────────────
const PATHWAYS = {

  // ── 0. B.TECH (ALREADY ENROLLED) ─────────────────────────────────────────
  // Student is already in B.Tech — no JEE needed, focus on skills + placement
  btech: () => ({
    career: 'Software Engineer / Full Stack Developer',
    desc: 'You are already in B.Tech! Focus on building real-world projects, mastering DSA, and landing your dream placement.',
    demand: 'Extremely High',
    matchScore: 96,
    timeline: '3–4 Years',
    growthTrajectory: ['Junior Dev (₹6–10 LPA)', 'Mid-Level SWE (₹15–25 LPA)', 'Senior Engineer (₹30–50 LPA)', 'Tech Lead / Architect (₹60L+)'],
    salary: '₹8–40 LPA (India) | $100K–$200K (Global)',
    jobGrowth: '+22% YoY',
    industryTrend: 'Companies are hiring engineers who can code, design systems, and ship products — not just degree holders.',
    degrees: [
      { title: 'B.Tech (Enrolled)', desc: 'Currently studying' },
      { title: 'Internship / Projects', desc: 'Build your portfolio' },
      { title: 'Placement / Startup', desc: 'End goal' },
    ],
    colleges: [
      PW_IOI,
      { name: 'IIT Bombay', location: 'Mumbai', country: 'India', type: 'Public', rank: 2, fees: '₹2.5 LPA', rating: 5.0, tags: ['Engineering', 'Research', 'AI & ML'] },
      { name: 'BITS Pilani', location: 'Pilani', country: 'India', type: 'Private', rank: 3, fees: '₹5 LPA', rating: 4.8, tags: ['Engineering', 'Coding', 'AI & ML'] },
    ],
    courses: [
      { title: 'Decode DSA with C++ / Java', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Full Stack Web Development (MERN)', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'System Design & DevOps Bootcamp', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
    ],
    skills: ['Data Structures & Algorithms (DSA)', 'OOPS in C++ / Java', 'React.js / Node.js', 'SQL & MongoDB', 'Git & GitHub', 'System Design'],
    futureScope: 'Top B.Tech grads from IITs and NITs are placed at ₹20–80 LPA in companies like Google, Microsoft, Amazon. FAANG + Startup ecosystem is booming.',
    roadmap: [
      { id: 1, title: 'DSA Mastery (Roadmap.sh)', duration: 'Semester 1–2', items: ['C++ / Java basics', 'Arrays, Strings, Linked Lists', 'LeetCode Easy → Medium problems'] },
      { id: 2, title: 'Web Dev + Projects', duration: 'Semester 3–4', items: ['HTML, CSS, JavaScript', 'React.js + Node.js (MERN stack)', 'Build 2 full-stack projects for GitHub'] },
      { id: 3, title: 'Internship Ready', duration: 'Semester 5', items: ['Apply for internships (Internshala/LinkedIn)', 'System Design basics', 'Interview prep (Mock rounds)'] },
      { id: 4, title: 'Placement & Beyond', duration: 'Semester 6–8', items: ['On-campus + off-campus drives', 'FAANG prep (advanced DSA, System Design)', 'Build personal brand on LinkedIn/GitHub'] },
    ],
  }),

  // ── 0b. M.TECH (POST-GRAD ENGINEERING) ──────────────────────────────────
  // M.Tech student — GATE already cleared or pursuing higher studies / research
  mtech: () => ({
    career: 'Research Engineer / Specialist / PSU Officer',
    desc: 'You are in M.Tech — the path to specialized engineering, cutting-edge research, and premium PSU or academia roles.',
    demand: 'High – Specialized Niche',
    matchScore: 91,
    timeline: '1–2 Years (M.Tech)',
    growthTrajectory: ['Research Associate (₹10–18 LPA)', 'Senior Researcher (₹20–35 LPA)', 'Principal Scientist (₹40–60 LPA)', 'Research Director / Faculty (₹70L+)'],
    salary: '₹15–50 LPA (India) | $120K–$200K (Research/Global)',
    jobGrowth: '+15% for specialized engineers',
    industryTrend: 'Government R&D funding, AI research labs (Google DeepMind, ISRO), and deep-tech startups are creating elite roles for M.Tech graduates.',
    degrees: [
      { title: 'B.Tech', desc: 'Already completed' },
      { title: 'M.Tech (Enrolled)', desc: 'Specialization' },
      { title: 'PhD / PSU / Research Lab', desc: 'End goal' },
    ],
    colleges: [
      { name: 'IISc Bangalore', location: 'Bangalore', country: 'India', type: 'Public', rank: 1, fees: '₹0.5 LPA', rating: 5.0, tags: ['Research', 'Engineering', 'AI & ML'] },
      { name: 'IIT Madras', location: 'Chennai', country: 'India', type: 'Public', rank: 2, fees: '₹0.25 LPA', rating: 4.9, tags: ['Engineering', 'Research'] },
      { name: 'IIT Delhi', location: 'New Delhi', country: 'India', type: 'Public', rank: 3, fees: '₹0.25 LPA', rating: 4.9, tags: ['Engineering', 'AI & ML'] },
    ],
    courses: [
      { title: 'Advanced Machine Learning & AI Research', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Research Paper Writing & Publication', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Cloud & HPC for Research (AWS/GCP)', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
    ],
    skills: ['Research Methodology', 'Thesis Writing (LaTeX)', 'Advanced Core Subject (AI/VLSI/Civil/Mech)', 'Python / MATLAB', 'Literature Review', 'Patent Documentation'],
    futureScope: 'M.Tech opens doors to IITs/IISc faculty positions, DRDO/ISRO/BARC research roles, and premium deep-tech startups. PhD pathway leads to global research careers.',
    roadmap: [
      { id: 1, title: 'Coursework & Fundamentals', duration: 'Semester 1', items: ['Advanced electives (AI, VLSI, Structures)', 'Lab work & assignments', 'Literature survey for thesis topic'] },
      { id: 2, title: 'Research & Thesis', duration: 'Semester 2–3', items: ['Finalize thesis problem statement', 'Experiments & data collection', 'First draft of research paper'] },
      { id: 3, title: 'Publication & Patents', duration: 'Semester 3', items: ['Submit to IEEE/Springer journal', 'Patent filing (if applicable)', 'Internship at research lab (DRDO/ISRO)'] },
      { id: 4, title: 'Career Launch', duration: 'Final Semester', items: ['PhD applications or PSU forms', 'Campus placement drives', 'LinkedIn & Google Scholar profile'] },
    ],
  }),

  // ── 1. JEE / B.TECH ENTRANCE PREP ────────────────────────────────────────
  // For Class 10/11/12/Dropper students targeting JEE
  jee: (role) => {
    const batchMap = {
      '10th': 'Udaan Batch – Class 10',
      '11th': 'Arjuna JEE (Class 11)',
      '12th': 'Lakshya JEE (Class 12)',
      'Dropper': 'Prayas JEE – Dropper Batch',
    };
    const batch = batchMap[role] || 'Lakshya JEE (Class 12)';
    return {
      career: 'Software Engineer / IIT Graduate',
      desc: 'Crack JEE and join India\'s top engineering colleges. Build the next generation of technology at scale.',
      demand: 'Extremely High',
      matchScore: 94,
      timeline: '4–5 Years (JEE + B.Tech)',
      growthTrajectory: ['JEE Prep (Now)', 'B.Tech Admission', 'Campus Internship (₹1–3 LPA)', 'Campus Placement (₹8–40 LPA)'],
      salary: '₹8–40 LPA (India) | $100K–$200K (Global)',
      jobGrowth: '+18% YoY',
      industryTrend: 'AI-driven automation, cloud computing, and semiconductors are reshaping engineering demand.',
      degrees: [
        { title: role || 'Class 12', desc: 'PCM Focus' },
        { title: 'JEE Main + Adv', desc: 'Entrance Exam' },
        { title: 'B.Tech CS / AI', desc: 'Core Degree' },
      ],
      colleges: [
        PW_IOI,
        { name: 'IIT Bombay', location: 'Mumbai', country: 'India', type: 'Public', rank: 2, fees: '₹2.5 LPA', rating: 5.0, tags: ['Engineering', 'Research', 'AI & ML'] },
        { name: 'IIT Delhi', location: 'New Delhi', country: 'India', type: 'Public', rank: 3, fees: '₹2.5 LPA', rating: 5.0, tags: ['Engineering', 'Robotics'] },
        { name: 'NIT Trichy', location: 'Trichy', country: 'India', type: 'Public', rank: 8, fees: '₹1.5 LPA', rating: 4.7, tags: ['Engineering'] },
      ],
      courses: [
        { title: batch, source: 'Physics Wallah (PW.live)', url: 'https://www.pw.live', type: 'pw' },
        { title: 'Full Stack Web Development (MERN)', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
        { title: 'Decode DSA with C++', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      ],
      skills: ['Mathematics (Calculus, Algebra)', 'Physics Mechanics', 'Algorithmic Thinking', 'C++ / Python Basics', 'Problem Solving', 'Mock Test Discipline'],
      futureScope: 'IIT graduates lead India\'s $250B+ tech sector, with alumni at Google, Meta, and hundreds of funded startups. AI & ML specializations show 3x salary premiums.',
      roadmap: [
        { id: 1, title: 'School Foundation', duration: 'Now → Exam', items: ['NCERT Mastery (Maths/Physics/Chemistry)', 'Daily 6–8 hour study schedule', 'Past 10-yr JEE PYQs'] },
        { id: 2, title: 'JEE Intensive Prep', duration: '6–10 Months', items: ['Advanced problem sets (DC Pandey, Irodov)', 'Weekly mock tests + analysis', 'Revision strategy & formula notes'] },
        { id: 3, title: 'B.Tech — Core Skills', duration: 'Year 1–2', items: ['Data Structures & Algorithms (DSA)', 'OOP in C++ / Java', 'Web basics (HTML, CSS, JS)'] },
        { id: 4, title: 'Industry Ready', duration: 'Year 3–4', items: ['System Design & Architecture', 'Internships at top companies', 'Open source & competitive coding'] },
      ],
    };
  },

  // ── 2. NEET / MEDICAL ────────────────────────────────────────────────────
  neet: (role) => {
    const batchMap = {
      '11th': 'Arjuna NEET – Class 11',
      '12th': 'Lakshya NEET – Class 12',
      'Dropper': 'Yakeen NEET – Dropper Batch',
    };
    const batch = batchMap[role] || 'Lakshya NEET – Class 12';
    return {
      career: 'Medical Doctor / MBBS Graduate',
      desc: 'Serve humanity as a healthcare professional. NEET opens doors to MBBS, BDS, and allied medical careers.',
      demand: 'Very High – Evergreen',
      matchScore: 92,
      timeline: '5.5 Years (MBBS)',
      growthTrajectory: ['NEET Prep (Now)', 'MBBS Admission', 'Internship / Residency', 'MD / Specialization (₹25–60 LPA)'],
      salary: '₹10–60 LPA (India) | $150K+ (Global)',
      jobGrowth: '+14% YoY',
      industryTrend: 'Telemedicine, AI-assisted diagnosis, and genomics are transforming modern healthcare.',
      degrees: [
        { title: role || 'Class 12', desc: 'PCB Focus' },
        { title: 'NEET UG Exam', desc: 'Entrance Exam' },
        { title: 'MBBS / BDS', desc: 'Medical Degree' },
      ],
      colleges: [
        { name: 'AIIMS New Delhi', location: 'New Delhi', country: 'India', type: 'Public', rank: 1, fees: '₹0.15 LPA', rating: 5.0, tags: ['Medical', 'Research', 'Top Tier'] },
        { name: 'AFMC Pune', location: 'Pune', country: 'India', type: 'Public', rank: 2, fees: '₹0.5 LPA', rating: 4.8, tags: ['Medical'] },
        { name: 'CMC Vellore', location: 'Vellore', country: 'India', type: 'Private', rank: 3, fees: '₹8 LPA', rating: 4.8, tags: ['Medical', 'Clinical'] },
        { name: 'Kasturba Medical College', location: 'Manipal', country: 'India', type: 'Private', rank: 4, fees: '₹12 LPA', rating: 4.7, tags: ['Medical'] },
      ],
      courses: [
        { title: batch, source: 'Physics Wallah (PW.live)', url: 'https://www.pw.live', type: 'pw' },
        { title: 'Khazana – Free NEET Lectures', source: 'Physics Wallah', url: 'https://www.pw.live', type: 'pw' },
        { title: 'Biology Masterclass (NCERT)', source: 'Physics Wallah', url: 'https://www.pw.live', type: 'pw' },
      ],
      skills: ['Human Anatomy & Physiology', 'Organic Chemistry', 'Plant & Animal Biology (NCERT)', 'Clinical Reasoning', '3-hour Exam Endurance', 'Daily Practice Problems (DPPs)'],
      futureScope: 'India needs 1M+ doctors by 2030. Specializations in cardiology, oncology, and neurosurgery command ₹50L+ salaries. Global pathways via USMLE (USA) and PLAB (UK).',
      roadmap: [
        { id: 1, title: 'NCERT Foundation Phase', duration: 'Start Now', items: ['Biology – line by line NCERT', 'Chemistry – Organic + Inorganic', 'Physics – Mechanics & Modern'] },
        { id: 2, title: 'Concept Mastery', duration: '4–6 Months', items: ['All India Test Series (AITS)', 'Weekly doubt-clearing sessions', 'Short revision notes per chapter'] },
        { id: 3, title: 'Exam-Ready Phase', duration: 'Final 60 Days', items: ['Full mocks every 3 days', 'PYQs (2013–2024)', 'Time management drills'] },
        { id: 4, title: 'Counseling & College', duration: 'Post Result', items: ['MCC / NEET-AIQ counseling', 'College preference sorting', 'Internship rotation planning'] },
      ],
    };
  },

  // ── 3. GATE ───────────────────────────────────────────────────────────────
  gate: () => ({
    career: 'PSU Officer / M.Tech at IIT/IISc',
    desc: 'GATE opens premium government research roles (PSUs) and IIT/IISc M.Tech admissions for specialized engineers.',
    demand: 'High – Selective Excellence',
    matchScore: 88,
    timeline: '12–18 Months GATE Prep',
    growthTrajectory: ['GATE Qualify (<1000 rank)', 'M.Tech / PSU Join', 'Senior Engineer PSU (₹20–30 LPA)', 'Executive / Scientist Grade (₹35–55 LPA)'],
    salary: '₹15–35 LPA (PSU) | ₹25–60 LPA (M.Tech Career)',
    jobGrowth: '+12% YoY',
    industryTrend: 'Government\'s push for self-reliant India (Atmanirbhar) and R&D funding is boosting PSU recruitment.',
    degrees: [
      { title: 'B.Tech', desc: 'Core Engineering' },
      { title: 'GATE Exam', desc: 'Rank < 1000' },
      { title: 'M.Tech / PSU', desc: 'Final Goal' },
    ],
    colleges: [
      { name: 'IISc Bangalore', location: 'Bangalore', country: 'India', type: 'Public', rank: 1, fees: '₹0.5 LPA', rating: 5.0, tags: ['Engineering', 'Research', 'AI & ML'] },
      { name: 'IIT Madras', location: 'Chennai', country: 'India', type: 'Public', rank: 2, fees: '₹0.25 LPA', rating: 4.9, tags: ['Engineering'] },
      { name: 'IIT Delhi', location: 'New Delhi', country: 'India', type: 'Public', rank: 3, fees: '₹0.25 LPA', rating: 4.9, tags: ['Engineering', 'Robotics'] },
    ],
    courses: [
      { title: 'GATE Wallah – Parakram 2025', source: 'PW GATE Wallah', url: 'https://www.pw.live', type: 'pw' },
      { title: 'GATE Shaurya Batch (Self-paced)', source: 'PW GATE Wallah', url: 'https://www.pw.live', type: 'pw' },
      { title: 'Engineering Mathematics Crash Course', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
    ],
    skills: ['Engineering Mathematics', 'Core Branch Subjects (CS/EC/ME/CE)', 'General Aptitude', 'PYQ Analysis (15+ years)', 'Short Notes Preparation', 'Technical Report Writing'],
    futureScope: 'PSU roles at ONGC, ISRO, DRDO, NTPC offer lifetime job security with ₹1Cr+ lifetime earnings. M.Tech at IITs opens global research careers.',
    roadmap: [
      { id: 1, title: 'Fundamentals Phase', duration: 'Months 1–4', items: ['Engineering Mathematics (Thomas Calculus)', 'General Aptitude (Verbal + Quant)', 'Core subjects chapter mapping'] },
      { id: 2, title: 'Advanced Concepts', duration: 'Months 5–8', items: ['Advanced core subject topics', 'Short-note creation per topic', 'Sectional mock tests'] },
      { id: 3, title: 'Intensive Revision', duration: 'Months 9–11', items: ['GATE PYQs (2010–2024)', 'Full mock GATE exams', 'Weak topic targeted revision'] },
      { id: 4, title: 'Post GATE (COAP / PSU)', duration: 'Feb–May', items: ['PSU application portals', 'IIT/IISc COAP counseling', 'PSU-specific interview prep'] },
    ],
  }),

  // ── 4. UPSC / GOVERNMENT EXAMS ───────────────────────────────────────────
  upsc: () => ({
    career: 'Civil Servant – IAS / IPS / IFS',
    desc: 'Shape national policy, lead districts, and serve India at the highest administrative level.',
    demand: 'Elite – 0.2% selection rate',
    matchScore: 85,
    timeline: '2–4 Years Preparation',
    growthTrajectory: ['Prelims Clear', 'Mains Qualify', 'IAS Training (LBSNAA)', 'District Collector → Jt. Secretary → Secretary GoI'],
    salary: 'Grade Pay ₹56K–₹2.5L/month + perks',
    jobGrowth: 'Stable – Government',
    industryTrend: 'Digital India push creating new IAS/IPS roles in tech policy, smart city governance, and fintech regulation.',
    degrees: [
      { title: 'Graduation', desc: 'Any Stream' },
      { title: 'UPSC CSE', desc: 'Prelims + Mains' },
      { title: 'LBSNAA', desc: 'IAS Training' },
    ],
    colleges: [
      { name: 'Delhi University', location: 'New Delhi', country: 'India', type: 'Public', rank: 1, fees: '₹0.1 LPA', rating: 4.7, tags: ['Management', 'Humanities'] },
      { name: 'Jawaharlal Nehru University (JNU)', location: 'New Delhi', country: 'India', type: 'Public', rank: 2, fees: '₹0.05 LPA', rating: 4.6, tags: ['Humanities'] },
    ],
    courses: [
      { title: 'Sankalp UPSC 2025 – Foundation Batch', source: 'PW OnlyIAS', url: 'https://www.pw.live', type: 'pw' },
      { title: 'UPSC Prahaar Prelims Batch', source: 'PW OnlyIAS', url: 'https://www.pw.live', type: 'pw' },
      { title: 'Static GK & Current Affairs Series', source: 'PW OnlyIAS', url: 'https://www.pw.live', type: 'pw' },
    ],
    skills: ['Indian Polity (Laxmikanth)', 'Modern History (Spectrum)', 'Current Affairs (Daily)', 'Essay Writing', 'Ethics & Public Administration', 'Map & Geography'],
    futureScope: 'IAS officers eventually become Chief Secretaries and Secretaries to the Government of India with significant national impact. UPSC opens doors to foreign services and PM offices.',
    roadmap: [
      { id: 1, title: 'GS Foundation (NCERTs)', duration: 'Months 1–4', items: ['Class 6–12 NCERTs (History, Polity, Geo, Science)', 'Daily newspaper (The Hindu / Indian Express)', 'Basic Polity (Laxmikanth intro)'] },
      { id: 2, title: 'Core Mains Subjects', duration: 'Months 5–10', items: ['GS1–GS4 comprehensive coverage', 'Optional subject full coverage', 'Answer writing practice (10/day)'] },
      { id: 3, title: 'Prelims Specific Prep', duration: 'Months 11–13', items: ['CSAT daily practice', 'Previous 10-yr prelims PYQs', 'Weekly full mock tests'] },
      { id: 4, title: 'Mains + Interview', duration: 'Post Prelims', items: ['Mains answer writing intensive', 'Ethics case studies', 'Mock interview boards'] },
    ],
  }),

  // ── 5. BBA / MANAGEMENT ───────────────────────────────────────────────────
  management: (role) => ({
    career: 'Business Manager / Product Lead / Entrepreneur',
    desc: 'Lead organizations, scale products, and drive strategic decisions. BBA is the launchpad for India\'s next generation of leaders.',
    demand: 'High & Growing',
    matchScore: 87,
    timeline: '3–5 Years (BBA + MBA)',
    growthTrajectory: ['BBA / B.Com', 'MBA (IIM/Top B-School)', 'Manager (₹12–20 LPA)', 'Director / VP (₹30–60 LPA)'],
    salary: '₹6–25 LPA (India) | $80K–$150K (Global)',
    jobGrowth: '+16% YoY',
    industryTrend: 'AI-augmented business analysis, D2C brand boom, and fintech are creating explosive demand for business-savvy professionals.',
    degrees: [
      { title: role || 'Class 12', desc: 'Any Stream' },
      { title: 'BBA / B.Com', desc: '3-Year Degree' },
      { title: 'MBA (optional)', desc: 'Specialization' },
    ],
    colleges: [
      PW_IOI,
      { name: 'IIM Indore (IPM)', location: 'Indore', country: 'India', type: 'Public', rank: 2, fees: '₹6 LPA', rating: 4.9, tags: ['Management', 'Business Finance'] },
      { name: 'NMIMS Mumbai', location: 'Mumbai', country: 'India', type: 'Private', rank: 3, fees: '₹8 LPA', rating: 4.7, tags: ['Management'] },
      { name: 'Symbiosis Pune', location: 'Pune', country: 'India', type: 'Private', rank: 4, fees: '₹5 LPA', rating: 4.6, tags: ['Management', 'BBA'] },
    ],
    courses: [
      { title: 'Product Management Certification', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Business Analytics with Excel & Python', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Entrepreneurship & Innovation (PW IOI)', source: 'PW IOI', url: 'https://pwioi.com', type: 'pwioi' },
    ],
    skills: ['Market Research & Analysis', 'Financial Modeling (Excel)', 'Agile & Scrum Methodologies', 'Product Lifecycle Management', 'Stakeholder Communication', 'Go-to-Market Strategy'],
    futureScope: 'India\'s startup ecosystem (100+ unicorns) and MNC expansion are creating immense demand for skilled product managers and business leaders paying ₹25L+ in 5 years.',
    roadmap: [
      { id: 1, title: 'Business Fundamentals', duration: 'Year 1', items: ['Microeconomics & Market Dynamics', 'Financial Accounting (basics)', 'Business Communication skills'] },
      { id: 2, title: 'Strategy & Analytics', duration: 'Year 2', items: ['Marketing (4Ps, STP framework)', 'Data Analytics (Excel, SQL)', 'Operations Management'] },
      { id: 3, title: 'Product & Agile (Roadmap.sh)', duration: 'Year 3', items: ['Product thinking & PRD writing', 'Agile/Scrum ceremonies', 'Wireframing with Figma'] },
      { id: 4, title: 'Career Launch', duration: 'Year 3 + Beyond', items: ['Internships + PPO conversion', 'CAT/GMAT for MBA (optional)', 'Startup / Placement drives'] },
    ],
  }),

  // ── 6. DATA SCIENCE / AI ─────────────────────────────────────────────────
  datascience: () => ({
    career: 'Data Scientist / Machine Learning Engineer',
    desc: 'Build AI models that power Google Search, Netflix recommendations, and autonomous vehicles — the most valued skill of the decade.',
    demand: 'Extremely High – Decade\'s #1 skill',
    matchScore: 97,
    timeline: '10–12 Months Fast-Track',
    growthTrajectory: ['Data Analyst (₹8–12 LPA)', 'ML Engineer (₹15–28 LPA)', 'Senior Data Scientist (₹30–50 LPA)', 'ML Architect / AI Research (₹60L+)'],
    salary: '₹12–60 LPA (India) | $120K–$250K (Global)',
    jobGrowth: '+35% YoY',
    industryTrend: 'Generative AI, LLMs (GPT/Gemini), and MLOps are creating entirely new job categories. Companies can\'t hire fast enough.',
    degrees: [
      { title: 'Class 12 / UG', desc: 'Any Stream' },
      { title: 'B.Tech CS / Statistics', desc: 'Core Degree' },
      { title: 'M.Tech AI / MBA Analytics', desc: 'Specialization' },
    ],
    colleges: [
      PW_IOI,
      { name: 'IIT Madras (BS Data Science)', location: 'Chennai', country: 'India', type: 'Public', rank: 2, fees: '₹2 LPA', rating: 5.0, tags: ['Data Science', 'AI & ML', 'Engineering'] },
      { name: 'IIIT Hyderabad', location: 'Hyderabad', country: 'India', type: 'Public', rank: 3, fees: '₹3 LPA', rating: 4.8, tags: ['Data Science', 'AI & ML'] },
      { name: 'MIT (Global)', location: 'Cambridge, MA', country: 'United States', type: 'Private', rank: 1, fees: '$58K/yr', rating: 5.0, tags: ['AI & ML', 'Data Science', 'Robotics'] },
    ],
    courses: [
      { title: 'Data Science Masters Program', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'ML & Deep Learning with Python', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Full Stack Data Science + GenAI', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
    ],
    skills: ['Python (NumPy, Pandas)', 'Machine Learning (Scikit-learn)', 'Deep Learning (PyTorch / TensorFlow)', 'SQL & Big Data (Spark)', 'Statistics & Probability', 'Data Visualization (Tableau/PowerBI)'],
    futureScope: 'Generative AI alone created 500K+ new roles in 2024. Data Scientists with GenAI knowledge command 2–3x salaries. Path leads to ML Architect, AI Research Scientist, or CTO.',
    roadmap: [
      { id: 1, title: 'Programming & Math Foundation', duration: 'Months 1–3', items: ['Python (basics to advanced)', 'Linear Algebra & Calculus', 'Statistics & Probability'] },
      { id: 2, title: 'Data Wrangling & EDA', duration: 'Months 4–6', items: ['Pandas / NumPy deep dive', 'SQL Mastery (complex queries)', 'Exploratory Data Analysis (EDA)'] },
      { id: 3, title: 'ML / AI (Roadmap.sh aligned)', duration: 'Months 7–9', items: ['Supervised & Unsupervised Learning', 'Feature Engineering & NLP', 'Scikit-learn, XGBoost, LightGBM'] },
      { id: 4, title: 'Deep Learning & Deployment', duration: 'Months 10–12', items: ['Neural Networks (PyTorch)', 'MLOps (Docker, Kubernetes)', 'Capstone project + GitHub Portfolio'] },
    ],
  }),

  // ── 7. FULL STACK / CODING ────────────────────────────────────────────────
  coding: () => ({
    career: 'Full Stack Developer / Software Engineer',
    desc: 'Build complete web applications — from pixel-perfect UIs to scalable server backends — and ship products used by millions.',
    demand: 'Very High',
    matchScore: 93,
    timeline: '10–12 Months',
    growthTrajectory: ['Frontend Dev (₹5–8 LPA)', 'Full Stack Dev (₹12–22 LPA)', 'Senior SWE (₹25–45 LPA)', 'Staff / Principal Engineer (₹60L+)'],
    salary: '₹8–40 LPA (India) | $100K–$200K (Global)',
    jobGrowth: '+22% YoY',
    industryTrend: 'AI-assisted coding (GitHub Copilot, Cursor), serverless architectures, and Web3 are reshaping how software is built.',
    degrees: [
      { title: 'Class 12 / Any', desc: 'No degree barrier' },
      { title: 'B.Tech CS / BCA', desc: 'Preferred path' },
      { title: 'Full Stack Bootcamp', desc: 'Fast Track' },
    ],
    colleges: [
      PW_IOI,
      { name: 'BITS Pilani', location: 'Pilani', country: 'India', type: 'Private', rank: 2, fees: '₹5 LPA', rating: 4.8, tags: ['Engineering', 'Coding', 'AI & ML'] },
      { name: 'VIT Vellore', location: 'Vellore', country: 'India', type: 'Private', rank: 3, fees: '₹2.5 LPA', rating: 4.5, tags: ['Engineering', 'Coding'] },
    ],
    courses: [
      { title: 'Full Stack Web Development (MERN)', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Decode DSA with C++ & Java', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      { title: 'Backend with Node.js & Databases', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
    ],
    skills: ['HTML5, CSS3, JavaScript (ES6+)', 'React.js / Next.js', 'Node.js & Express.js', 'PostgreSQL / MongoDB', 'REST APIs & GraphQL', 'Git, CI/CD, AWS Deployment'],
    futureScope: 'Full Stack roles are transitioning into AI-augmented engineering. Senior SWEs at Google/Meta earn $300K+. India\'s tech ecosystem offers ESOP wealth at funded startups.',
    roadmap: [
      { id: 1, title: 'Frontend Basics (Roadmap.sh)', duration: 'Months 1–3', items: ['Internet & HTTP fundamentals', 'HTML5 + CSS3 (Flexbox/Grid)', 'JavaScript DOM & ES6+'] },
      { id: 2, title: 'React & Frontend Mastery', duration: 'Months 4–6', items: ['React.js hooks & state management', 'Next.js & SSR / SSG', 'Tailwind CSS + Component design'] },
      { id: 3, title: 'Backend & Databases', duration: 'Months 7–9', items: ['Node.js + Express REST APIs', 'PostgreSQL + MongoDB', 'Authentication (JWT, OAuth2)'] },
      { id: 4, title: 'DevOps & Job Launch', duration: 'Months 10–12', items: ['System Design basics', 'CI/CD with GitHub Actions', 'AWS / Vercel deployment + portfolio'] },
    ],
  }),

  // ── 8. WORKING PROFESSIONAL / CAREER SWITCHER ────────────────────────────
  professional: (exams) => {
    const isDataFocused = exams.includes('Data Science');
    return {
      career: isDataFocused ? 'Data Science Career Switcher' : 'Tech Career Switcher / Upskiller',
      desc: 'Leverage your existing experience and rapidly upskill into high-growth tech or management roles with structured fast-track programs.',
      demand: 'High – Cross-Industry',
      matchScore: 89,
      timeline: '9–12 Months Switch',
      growthTrajectory: ['Current Role', 'Upskill + Portfolio Build', isDataFocused ? 'Data Analyst / Junior DS (₹10–18 LPA)' : 'Junior Dev (₹8–14 LPA)', 'Senior Role Switch (₹25–45 LPA)'],
      salary: '₹15–50 LPA (within 1–2 years post-switch)',
      jobGrowth: '+25% for career switchers in tech',
      industryTrend: 'Companies actively hiring experienced professionals from non-tech backgrounds for product, data, and business roles.',
      degrees: [
        { title: 'Current Degree', desc: 'Already complete' },
        { title: 'Certification / PG Diploma', desc: 'Fast-track upskill' },
        { title: 'Target Role', desc: '12–18 months away' },
      ],
      colleges: [
        { name: 'IIM Bangalore (EPGP)', location: 'Bangalore', country: 'India', type: 'Public', rank: 1, fees: '₹23 LPA', rating: 4.9, tags: ['Management', 'Executive'] },
        { name: 'ISB Hyderabad', location: 'Hyderabad', country: 'India', type: 'Private', rank: 2, fees: '₹40 LPA', rating: 4.8, tags: ['Management', 'Business Finance'] },
      ],
      courses: [
        { title: isDataFocused ? 'Data Science Masters Program' : 'Full Stack Web Development (MERN)', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
        { title: 'Product Management Certification', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
        { title: 'Business Analytics Masterclass', source: 'PW Skills', url: 'https://pwskills.com', type: 'pwskills' },
      ],
      skills: ['Existing domain expertise (leverage it)', 'Data Analysis (Excel, SQL)', 'Product Thinking', 'Communication & Leadership', isDataFocused ? 'Python & ML basics' : 'JavaScript basics', 'Portfolio building'],
      futureScope: 'Career switchers who upskill into tech often see 2–3x salary jumps within 2 years. Your domain expertise + tech skills creates a rare, highly marketable combination.',
      roadmap: [
        { id: 1, title: 'Self-Assessment & Goal Setting', duration: 'Week 1–2', items: ['Identify transferable skills', 'Targeted role research (LinkedIn/Glassdoor)', 'Build a learning roadmap'] },
        { id: 2, title: 'Fast-Track Skill Acquisition', duration: 'Months 1–4', items: isDataFocused ? ['Python for Data Science', 'SQL & EDA', 'Machine Learning basics'] : ['HTML/CSS/JS fundamentals', 'React basics', 'Node.js + REST APIs'] },
        { id: 3, title: 'Build Portfolio Projects', duration: 'Months 5–8', items: ['3 production-grade projects', 'Open source contributions', 'GitHub & LinkedIn optimization'] },
        { id: 4, title: 'Job Search & Negotiate', duration: 'Months 9–12', items: ['Targeted applications (50+ companies)', 'Mock technical interviews', 'Salary negotiation (aim for top 20% range)'] },
      ],
    };
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Smart pathway selector — maps user inputs to correct pathway
// ─────────────────────────────────────────────────────────────────────────────
function selectPathway(userData) {
  const { type, exams = [], goal, role } = userData;

  const has = (arr, ...keys) => arr.some(e => keys.includes(e));

  // ── CLASS/PHASE IS THE FIRST PRIORITY ────────────────────────────────────
  // If student is already in B.Tech or M.Tech, they don't need JEE/entrance prep
  if (role === 'M.Tech') return PATHWAYS.mtech();
  if (role === 'B.Tech') return PATHWAYS.btech();
  // Working Professionals always get the career-switch pathway
  if (role === 'Working Professional') return PATHWAYS.professional(exams);

  // ── EXAM-BASED ROUTING ────────────────────────────────────────────────────
  // Priority order matters — more specific first
  if (has(exams, 'UPSC', 'Govt. Exams')) return PATHWAYS.upsc();
  if (has(exams, 'GATE')) return PATHWAYS.gate();
  if (has(exams, 'NEET', 'Medical')) return PATHWAYS.neet(role);
  if (has(exams, 'JEE', 'B.Tech')) return PATHWAYS.jee(role);
  if (has(exams, 'Management', 'BBA', 'Business & Finance')) return PATHWAYS.management(role);
  if (has(exams, 'Data Science', 'Robotics & AI')) return PATHWAYS.datascience();
  if (has(exams, 'Coding & Development', 'UI/UX Design')) return PATHWAYS.coding();
  if (type === 'Professional' || type === 'Career Switcher' || goal === 'switch') return PATHWAYS.professional(exams);

  // Default fallback based on type
  if (type === 'Student') return PATHWAYS.jee(role);
  return PATHWAYS.coding();
}

// ─────────────────────────────────────────────────────────────────────────────
// Context Provider
// ─────────────────────────────────────────────────────────────────────────────
export function UserProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    try {
      const saved = localStorage.getItem('lakshyai_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const saveUserData = (data) => {
    setUserData(data);
    localStorage.setItem('lakshyai_user', JSON.stringify(data));
  };

  const insights = useMemo(() => {
    if (!userData) return null;
    return selectPathway(userData);
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, saveUserData, insights }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
