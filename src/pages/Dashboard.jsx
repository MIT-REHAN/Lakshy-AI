import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Navigate } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, MonitorSmartphone, DollarSign, MessageSquare, BookOpen, Target, Flame, Clock, ChevronRight } from 'lucide-react';
import { useUser } from '../context/UserContext';

// Match Score Arc SVG
function MatchScoreArc({ score }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * score) / 100;
  const color = score >= 90 ? '#10B981' : score >= 80 ? '#F59E0B' : '#6366F1';

  return (
    <svg width={140} height={90} viewBox="0 0 140 90" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {/* Track */}
      <path
        d="M 14 85 A 56 56 0 0 1 126 85"
        fill="none"
        stroke="#EEF2FF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Arc fill — animated via dasharray trick on a circle, clipped to semi */}
      <circle
        cx="70" cy="85" r={radius}
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.5 + (circumference * 0.5 * (100 - score)) / 100}
        transform="rotate(-180 70 85)"
        style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
      />
    </svg>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { userData, insights } = useUser();

  if (!insights) return <Navigate to="/onboarding" replace />;

  const name = userData?.name?.split(' ')[0] || 'there';
  const greeting = new Date().getHours() < 12 ? 'Good morning' : new Date().getHours() < 17 ? 'Good afternoon' : 'Good evening';
  const score = insights.matchScore || 92;

  // Hero background based on career type
  const heroImages = {
    'Software': 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1000&q=80',
    'Medical': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    'Civil': 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=80',
    'Data': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1000&q=80',
    'Business': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    'Full Stack': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    'PSU': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    'Research': 'https://images.unsplash.com/photo-1532094349884-543559cca0ab?auto=format&fit=crop&w=1000&q=80',
    'IIT': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80',
    'MBBS': 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80',
  };
  const heroKey = Object.keys(heroImages).find(k => insights.career.includes(k)) || 'Software';
  const heroImg = heroImages[heroKey];

  // Pathway-specific salary level data
  const salaryLevels = (() => {
    const c = insights.career;
    if (c.includes('IIT') || c.includes('B.Tech') || c.includes('Full Stack') || c.includes('Software')) {
      return [
        { level: 'Entry Level', india: '₹4–8 LPA', global: '$60–80K', bar: 22 },
        { level: 'Mid Level', india: '₹10–20 LPA', global: '$100–130K', bar: 52 },
        { level: 'Senior', india: '₹25–45 LPA', global: '$150–200K', bar: 78 },
        { level: 'Lead / Expert', india: '₹50L+ / yr', global: '$200K+', bar: 100 },
      ];
    }
    if (c.includes('Data') || c.includes('Machine Learning')) {
      return [
        { level: 'Data Analyst', india: '₹6–12 LPA', global: '$70–90K', bar: 28 },
        { level: 'ML Engineer', india: '₹15–28 LPA', global: '$110–140K', bar: 55 },
        { level: 'Senior DS', india: '₹30–50 LPA', global: '$160–210K', bar: 80 },
        { level: 'AI Research / Arch', india: '₹60L+ / yr', global: '$250K+', bar: 100 },
      ];
    }
    if (c.includes('Medical') || c.includes('MBBS')) {
      return [
        { level: 'Intern / Resident', india: '₹1–3 LPA', global: '$50–70K', bar: 15 },
        { level: 'Junior Doctor', india: '₹8–15 LPA', global: '$120K', bar: 45 },
        { level: 'Specialist (MD)', india: '₹20–40 LPA', global: '$200K', bar: 75 },
        { level: 'Senior Specialist', india: '₹50–80 LPA', global: '$300K+', bar: 100 },
      ];
    }
    if (c.includes('Civil') || c.includes('IAS') || c.includes('IPS')) {
      return [
        { level: 'SDM / JMFC', india: '₹9–12 LPA equiv.', global: 'N/A', bar: 30 },
        { level: 'District Collector', india: '₹15–18 LPA equiv.', global: 'N/A', bar: 55 },
        { level: 'Joint Secretary', india: '₹25–30 LPA equiv.', global: 'N/A', bar: 78 },
        { level: 'Secretary to GoI', india: '₹40L+ equiv.', global: 'N/A', bar: 100 },
      ];
    }
    if (c.includes('Business') || c.includes('Manager')) {
      return [
        { level: 'Analyst / Executive', india: '₹5–8 LPA', global: '$60K', bar: 25 },
        { level: 'Manager', india: '₹12–20 LPA', global: '$90K', bar: 55 },
        { level: 'Senior Manager', india: '₹22–35 LPA', global: '$130K', bar: 78 },
        { level: 'Director / VP', india: '₹50L+ / yr', global: '$200K+', bar: 100 },
      ];
    }
    return [
      { level: 'Entry Level', india: '₹4–8 LPA', global: '$60–80K', bar: 22 },
      { level: 'Mid Level', india: '₹10–20 LPA', global: '$100–130K', bar: 52 },
      { level: 'Senior', india: '₹25–45 LPA', global: '$150–200K', bar: 78 },
      { level: 'Lead / Expert', india: '₹50L+ / yr', global: '$200K+', bar: 100 },
    ];
  })();

  const statCards = [
    { icon: '💵', label: 'Salary Range', value: insights.salary?.split('|')[0]?.trim() || insights.salary },
    { icon: '📈', label: 'Job Growth', value: insights.jobGrowth || '+22% YoY' },
    { icon: '🔥', label: 'Market Demand', value: insights.demand },
  ];

  const growthTrajectory = insights.growthTrajectory || [];

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 40 }}>

      {/* Header */}
      <div style={{ padding: '32px 40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600, margin: '0 0 4px' }}>{greeting}, {name} 👋</p>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>{insights.career}</h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: '8px 0 0', maxWidth: 540 }}>{insights.desc}</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/chat')} style={{ gap: 8, flexShrink: 0 }}>
          <MessageSquare size={16} /> Ask AI Mentor
        </button>
      </div>

      <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* Top Hero + Stats + Match Score */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 24 }}>

          {/* Left: Hero Banner */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            style={{
              background: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url("${heroImg}")`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              color: 'white', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 220,
            }}
          >
            <div style={{ display: 'inline-flex', background: 'var(--primary)', padding: '4px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 16, alignSelf: 'flex-start' }}>
              {insights.demand}
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.92, margin: 0, maxWidth: '85%' }}>{insights.industryTrend || insights.desc}</p>
          </motion.div>

          {/* Right Column: Match Score + Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Match Score Card */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white' }}
            >
              <div style={{ fontSize: 12, color: 'var(--hint)', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>AI Match Score</div>
              <MatchScoreArc score={score} />
              <div style={{ fontSize: 32, fontWeight: 900, color: score >= 90 ? '#10B981' : 'var(--primary)', margin: '-4px 0 4px', letterSpacing: '-0.03em' }}>{score}%</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600, textAlign: 'center' }}>Profile–Career Match</div>
            </motion.div>

            {/* Stat cards stacked */}
            {statCards.map((s, idx) => (
              <motion.div key={idx} className="card"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + 0.1 * idx }}
                style={{ padding: '16px 20px', flex: 1, display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--hint)', fontWeight: 600, marginBottom: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)' }}>{s.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Trajectory */}
        {growthTrajectory.length > 0 && (
          <motion.div className="card" style={{ padding: 32 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F0FDF4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TrendingUp size={18} color="#10B981" />
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Growth Trajectory</h3>
                <p style={{ fontSize: 12, color: 'var(--hint)', margin: 0 }}>Your career progression milestones</p>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 700, color: '#10B981' }}>{insights.timeline || '12 Months'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto' }}>
              {growthTrajectory.map((step, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 140, flex: 1 }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: i === 0 ? 'var(--primary)' : i === 1 ? '#8B5CF6' : '#E0E7FF',
                      display: 'flex', justifyContent: 'center', alignItems: 'center',
                      boxShadow: i === 0 ? '0 4px 12px rgba(90,93,255,0.3)' : 'none',
                      border: '2px solid white', outline: i === 0 ? '3px solid #EEF2FF' : 'none',
                    }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: i < 2 ? 'white' : 'var(--primary)' }}>{i + 1}</span>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, textAlign: 'center', marginTop: 10, color: i === 0 ? 'var(--primary)' : 'var(--text-primary)', lineHeight: 1.4, padding: '0 4px' }}>
                      {step}
                    </div>
                  </motion.div>
                  {i < growthTrajectory.length - 1 && (
                    <div style={{ flex: 0, width: 32, height: 2, background: '#EEF2FF', flexShrink: 0, alignSelf: 'flex-start', marginTop: 17 }}>
                      <ChevronRight size={16} color="var(--primary)" style={{ marginTop: -7, marginLeft: 8 }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills + Courses */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

          {/* Required Skills */}
          <motion.div className="card" style={{ padding: 32 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Target size={18} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Required Skills</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {insights.skills?.map((skill, idx) => (
                <div key={idx} style={{
                  display: 'flex', alignItems: 'center', gap: 7, padding: '9px 14px',
                  border: '1px solid #E0E7FF', borderRadius: 20, background: '#FAFBFF'
                }}>
                  <CheckCircle2 size={14} color="#10B981" />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommended Courses */}
          <motion.div className="card" style={{ padding: 32 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FEF3C7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BookOpen size={18} color="#D97706" />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Recommended Courses</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {insights.courses?.map((course, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', border: '1px solid var(--divider)', borderRadius: 14, background: '#FAFBFC' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, background: course.type === 'pw' ? '#FEF2F2' : course.type === 'pwioi' ? '#EEF2FF' : '#F0FDF4', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <MonitorSmartphone size={16} color={course.type === 'pw' ? '#EF4444' : course.type === 'pwioi' ? 'var(--primary)' : '#10B981'} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>{course.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--hint)', fontWeight: 600 }}>{course.source}</div>
                    </div>
                  </div>
                  <a href={course.url} target="_blank" rel="noreferrer">
                    <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: 12 }}>Visit</button>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Future Scope + AI Mentor CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

          {/* Future Scope */}
          <motion.div className="card" style={{ padding: 32 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F0FDF4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TrendingUp size={18} color="#10B981" />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Future Scope</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{insights.futureScope}</p>
            <div style={{ padding: '12px 16px', background: '#F0FDF4', borderRadius: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
                <span>Career Growth Trajectory</span>
                <span style={{ color: '#10B981' }}>{insights.jobGrowth || '+22% YoY'}</span>
              </div>
              <div style={{ height: 8, background: '#D1FAE5', borderRadius: 4, overflow: 'hidden' }}>
                <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ duration: 1.2, delay: 0.5 }}
                  style={{ height: '100%', background: '#10B981', borderRadius: 4 }} />
              </div>
            </div>
          </motion.div>

          {/* AI Mentor CTA */}
          <motion.div className="card" style={{ padding: 40, background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', color: 'white' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
              <Sparkles size={20} />
              <span style={{ fontWeight: 800, fontSize: 17 }}>AI Career Insights</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.92, marginBottom: 28 }}>
              Your profile shows strong aptitude for <strong>{insights.career}</strong>. Get personalized guidance, mock Q&As, and step-by-step strategies from your AI Mentor.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', width: '100%', fontWeight: 700, backdropFilter: 'blur(4px)' }} onClick={() => navigate('/chat')}>
                <MessageSquare size={16} /> Ask AI Mentor
              </button>
              <button className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', width: '100%', fontWeight: 700 }} onClick={() => navigate('/roadmap')}>
                <ArrowRight size={16} /> View Full Roadmap
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pathway-Specific Salary Benchmark */}
        <motion.div className="card" style={{ padding: 32 }} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FEF3C7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <DollarSign size={18} color="#D97706" />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Salary Benchmark — {insights.career}</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {salaryLevels.map((s, i) => (
              <div key={i} style={{ padding: '20px', background: '#F9FAFB', borderRadius: 16, border: '1px solid var(--divider)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--hint)', marginBottom: 8, textTransform: 'uppercase' }}>{s.level}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)', marginBottom: 4 }}>{s.india}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>{s.global}</div>
                <div style={{ height: 6, background: '#EEF2FF', borderRadius: 3, overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${s.bar}%` }} transition={{ duration: 1, delay: 0.1 * i + 0.6 }}
                    style={{ height: '100%', background: 'var(--primary)', borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
