import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, TrendingUp, DollarSign, Download, Share2, BookOpen, ExternalLink, ArrowRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PHASE_COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981'];
const PHASE_BG = ['#EEF2FF', '#F5F3FF', '#FDF2F8', '#ECFDF5'];

export default function Roadmap() {
  const navigate = useNavigate();
  const { insights } = useUser();
  const [expandedPhase, setExpandedPhase] = useState(0);

  if (!insights) return <Navigate to="/onboarding" replace />;

  const timeline = insights.roadmap || [];
  const growthTrajectory = insights.growthTrajectory || [];

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 60 }}>

      {/* Header */}
      <div style={{ padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontSize: 13, color: 'var(--hint)', fontWeight: 600, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Learning Path</p>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>{insights.career} Roadmap</h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>
            Structured, phase-by-phase path aligned with <strong>roadmap.sh</strong> frameworks and <strong>Physics Wallah</strong> course structure.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary" style={{ gap: 6 }}><Share2 size={15} /> Share</button>
          <button className="btn btn-secondary" style={{ gap: 6 }}><Download size={15} /> PDF</button>
        </div>
      </div>

      <div style={{ padding: '0 40px', maxWidth: 900 }}>

        {/* Stats Row */}
        <div className="three-cols" style={{ marginBottom: 36 }}>
          {[
            { icon: <Clock size={22} color="var(--text-secondary)" />, bg: '#F8FAFC', label: 'Total Duration', value: insights.timeline || `${timeline.length * 3}–${timeline.length * 4} Months` },
            { icon: <TrendingUp size={22} color="#10B981" />, bg: '#ECFDF5', label: 'Market Demand', value: insights.demand },
            { icon: <DollarSign size={22} color="#D97706" />, bg: '#FEF3C7', label: 'Target Salary', value: insights.salary?.split('|')[0]?.trim() || insights.salary },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ padding: 10, background: s.bg, borderRadius: 12 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--hint)', fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Trajectory Banner */}
        {growthTrajectory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: 32, padding: '20px 24px', background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)', borderRadius: 16, border: '1px solid #C7D2FE' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Sparkles size={16} color="var(--primary)" />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)' }}>Growth Trajectory</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--hint)' }}>{insights.jobGrowth}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              {growthTrajectory.map((step, i) => (
                <React.Fragment key={i}>
                  <span style={{
                    padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700,
                    background: i === 0 ? 'var(--primary)' : 'white',
                    color: i === 0 ? 'white' : 'var(--text-primary)',
                    border: '1px solid #C7D2FE',
                  }}>{step}</span>
                  {i < growthTrajectory.length - 1 && <ArrowRight size={14} color="var(--hint)" style={{ flexShrink: 0 }} />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommended Courses Banner */}
        <div style={{ marginBottom: 32, padding: '20px 24px', background: 'white', borderRadius: 16, border: '1px solid var(--divider)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>📚 Recommended for this path</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {(insights.courses || []).map((c, i) => (
                  <span key={i} style={{ padding: '4px 12px', background: '#F9FAFB', borderRadius: 20, fontSize: 12, fontWeight: 700, border: '1px solid var(--divider)', color: 'var(--text-primary)' }}>
                    {c.title} — <span style={{ color: 'var(--primary)' }}>{c.source}</span>
                  </span>
                ))}
              </div>
            </div>
            <a href={insights.courses?.[0]?.url || 'https://pwskills.com'} target="_blank" rel="noreferrer">
              <button className="btn btn-primary" style={{ gap: 6, fontSize: 13, padding: '10px 18px' }}>
                <ExternalLink size={14} /> Enroll Now
              </button>
            </a>
          </div>
        </div>

        {/* Phase Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Learning Phases</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#10B981', fontWeight: 700, fontSize: 13 }}>
            <CheckCircle2 size={16} /> {timeline.length} Phases Total
          </div>
        </div>

        {/* Timeline — all phases interactive/expandable */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {timeline.map((step, idx) => {
            const isExpanded = expandedPhase === idx;
            const color = PHASE_COLORS[idx % PHASE_COLORS.length];
            const bg = PHASE_BG[idx % PHASE_BG.length];

            return (
              <div key={idx} style={{ display: 'flex', gap: 24, position: 'relative' }}>
                {/* Timeline node */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28, flexShrink: 0 }}>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: isExpanded ? color : 'white',
                      border: `2px solid ${color}`,
                      display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2,
                      cursor: 'pointer', transition: 'all 0.2s',
                      boxShadow: isExpanded ? `0 4px 12px ${color}40` : 'none',
                    }}
                    onClick={() => setExpandedPhase(isExpanded ? -1 : idx)}
                  >
                    <span style={{ fontSize: 11, fontWeight: 800, color: isExpanded ? 'white' : color }}>{step.id}</span>
                  </motion.div>
                  {idx !== timeline.length - 1 && (
                    <div style={{ flex: 1, width: 2, background: isExpanded ? color : 'var(--divider)', opacity: 0.5, margin: '6px 0', transition: 'background 0.3s' }} />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="card"
                  onClick={() => setExpandedPhase(isExpanded ? -1 : idx)}
                  style={{
                    flex: 1, padding: '24px 28px', marginBottom: 20, cursor: 'pointer',
                    border: isExpanded ? `2px solid ${color}` : '1.5px solid var(--divider)',
                    background: isExpanded ? bg : 'white',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Phase {step.id}</span>
                      <h3 style={{ fontSize: 18, fontWeight: 800, margin: '4px 0 0', color: isExpanded ? color : 'var(--text-primary)' }}>{step.title}</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 20, border: `1px solid ${color}30`, background: `${color}10`, fontSize: 12, fontWeight: 700, color }}>
                        <Clock size={12} /> {step.duration}
                      </span>
                      {isExpanded ? <ChevronUp size={18} color="var(--hint)" /> : <ChevronDown size={18} color="var(--hint)" />}
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {step.items.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * i }}
                              style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: 'white', borderRadius: 12, border: `1px solid ${color}20` }}
                            >
                              <CheckCircle2 size={16} color={color} style={{ flexShrink: 0, marginTop: 1 }} />
                              <span style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.5 }}>{item}</span>
                            </motion.div>
                          ))}
                        </div>
                        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
                          <button
                            onClick={(e) => { e.stopPropagation(); navigate('/chat'); }}
                            style={{ background: 'none', border: 'none', color, fontWeight: 700, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                          >
                            Ask AI Mentor about Phase {step.id} <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="card" style={{ padding: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}>
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>Need help with any phase?</h3>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Your AI Mentor has specific exercises and resources for each topic.</span>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/chat')} style={{ gap: 8, flexShrink: 0 }}>
            <BookOpen size={15} /> Ask AI Mentor
          </button>
        </div>
      </div>
    </div>
  );
}
