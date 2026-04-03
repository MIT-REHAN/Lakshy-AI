import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, ArrowRight, Sparkles, GraduationCap, TrendingUp, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PATHS = [
  { icon: '🏗️', label: 'JEE / B.Tech', color: '#6366F1' },
  { icon: '🩺', label: 'NEET / Medical', color: '#EC4899' },
  { icon: '📊', label: 'Data Science', color: '#10B981' },
  { icon: '💻', label: 'Full Stack Dev', color: '#F59E0B' },
  { icon: '🇮🇳', label: 'UPSC / IAS', color: '#3B82F6' },
  { icon: '💼', label: 'Management', color: '#8B5CF6' },
];

const STATS = [
  { value: '50K+', label: 'Roadmaps Generated' },
  { value: '98%', label: 'Match Accuracy' },
  { value: '12+', label: 'Career Streams' },
];

// Floating orb background element
function Orb({ style }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0, ...style }}
    />
  );
}

export default function Splash() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pathIdx, setPathIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setPathIdx(i => (i + 1) % PATHS.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #FAFBFF 0%, #F0EFFF 50%, #F9FAFF 100%)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Decorative orbs */}
      <Orb style={{ top: '-8%', right: '-5%', width: 520, height: 520, background: 'radial-gradient(circle, #C7D2FE, transparent 70%)' }} />
      <Orb style={{ bottom: '-10%', left: '-8%', width: 480, height: 480, background: 'radial-gradient(circle, #DDD6FE, transparent 70%)' }} />
      <Orb style={{ top: '40%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, #BAE6FD, transparent 70%)', opacity: 0.4 }} />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 580, width: '100%', padding: '0 24px' }}
      >

        {/* Logo badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
          style={{ padding: 20, background: 'white', borderRadius: 32, boxShadow: '0 12px 40px rgba(90,93,255,0.12)', marginBottom: 32, border: '1px solid rgba(99,102,241,0.08)' }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 80, height: 80, borderRadius: 24, background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 28px rgba(90,93,255,0.35)' }}
          >
            <BrainCircuit color="#fff" size={42} />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 52, fontWeight: 900, margin: '0 0 8px', letterSpacing: '-0.04em', color: 'var(--text-primary)', textAlign: 'center' }}
        >
          LakshyAI
        </motion.h1>

        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid #C7D2FE', borderRadius: 24, padding: '6px 18px', background: '#EEF2FF', marginBottom: 20 }}
        >
          <Sparkles size={14} color="var(--primary)" />
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)' }}>AI-Powered Career Intelligence</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          style={{ fontSize: 17, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.6, margin: '0 0 32px', maxWidth: 440 }}
        >
          Your personal AI mentors builds a <strong style={{ color: 'var(--text-primary)' }}>fully personalized roadmap</strong> — courses, colleges, salary insights — in 30 seconds.
        </motion.p>

        {/* Rotating career path pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ marginBottom: 40, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <span style={{ fontSize: 13, color: 'var(--hint)', fontWeight: 600 }}>Perfect for:</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathIdx}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px',
                borderRadius: 24, border: `1.5px solid ${PATHS[pathIdx].color}30`,
                background: `${PATHS[pathIdx].color}10`,
              }}
            >
              <span style={{ fontSize: 18 }}>{PATHS[pathIdx].icon}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: PATHS[pathIdx].color }}>{PATHS[pathIdx].label}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          style={{ display: 'flex', gap: 32, marginBottom: 48 }}
        >
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--hint)', fontWeight: 600, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA area */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%', maxWidth: 340 }}
        >
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 220, height: 5, background: '#EEF2FF', borderRadius: 4, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2.2, ease: 'easeInOut' }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: 4 }}
                />
              </div>
              <span style={{ fontSize: 12, color: 'var(--hint)', fontWeight: 600 }}>Initializing AI Mentor...</span>
            </div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(90,93,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              onClick={() => navigate('/onboarding')}
              style={{ width: '100%', padding: '17px', fontSize: 16, borderRadius: 32, gap: 10, letterSpacing: '-0.01em', boxShadow: '0 4px 20px rgba(90,93,255,0.25)' }}
            >
              <BrainCircuit size={20} /> Get My Free Roadmap <ArrowRight size={18} />
            </motion.button>
          )}
          <p style={{ fontSize: 12, color: 'var(--hint)', margin: 0, textAlign: 'center' }}>
            No signup required • 100% free • Trusted by 50,000+ students
          </p>
        </motion.div>

      </motion.div>

      {/* Bottom powered-by */}
      <div style={{ position: 'absolute', bottom: 28, display: 'flex', alignItems: 'center', gap: 8, zIndex: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--hint)' }}>Powered by</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-secondary)', fontWeight: 700, fontSize: 12 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Vertex AI
        </div>
      </div>
    </div>
  );
}
