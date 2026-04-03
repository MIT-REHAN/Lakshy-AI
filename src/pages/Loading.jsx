import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, CheckCircle2 } from 'lucide-react';
import { useUser } from '../context/UserContext';

const STEPS = [
  { emoji: '🔍', label: 'Scanning your interests & goals...', color: '#6366F1' },
  { emoji: '📊', label: 'Matching with 10,000+ career paths...', color: '#8B5CF6' },
  { emoji: '🎓', label: 'Finding your best college options...', color: '#EC4899' },
  { emoji: '🗺️', label: 'Building your personalized roadmap...', color: '#10B981' },
  { emoji: '✨', label: 'Almost there! Finalizing your plan...', color: '#F59E0B' },
];

const TIPS = [
  '💡 Students who follow structured roadmaps are 3x more likely to land their dream job!',
  '🚀 JEE toppers study 8–10 hours daily with focused practice — quality beats quantity!',
  '🧠 NEET has a 93% applicant failure rate. The 7% who succeed follow a strict study schedule.',
  '📈 Data Science salaries grow 40% faster than any other tech field globally.',
  '🏆 IIT alumni run 35% of India\'s top unicorn startups. Your campus matters!',
  '⚡ Physics Wallah has helped 3 crore+ students crack competitive exams.',
];

// Floating particle component
function Particle({ x, y, emoji, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: -120, x: x, scale: [0, 1.2, 1, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: Math.random() * 2 + 1 }}
      style={{ position: 'absolute', bottom: 80, left: `${y}%`, fontSize: 22, zIndex: 5, pointerEvents: 'none' }}
    >
      {emoji}
    </motion.div>
  );
}

export default function Loading() {
  const navigate = useNavigate();
  const { insights } = useUser();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [tipIdx, setTipIdx] = useState(0);

  useEffect(() => {
    const tipTimer = setInterval(() => setTipIdx(t => (t + 1) % TIPS.length), 3000);
    return () => clearInterval(tipTimer);
  }, []);

  useEffect(() => {
    const bars = [0, 20, 45, 72, 90, 100];
    const delays = [0, 600, 1300, 2000, 2800, 3500];
    delays.forEach((d, i) => {
      setTimeout(() => {
        setProgress(bars[i]);
        setStep(Math.min(i, STEPS.length - 1));
      }, d);
    });
    setTimeout(() => navigate('/dashboard'), 4200);
  }, [navigate]);

  const careerLabel = insights?.career || 'your career path';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1030 50%, #0F1520 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* Animated background blobs */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }}
        style={{ position: 'absolute', top: '-10%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
      <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }}
        style={{ position: 'absolute', top: '30%', right: '20%', width: 300, height: 300, background: 'radial-gradient(circle, #10B981 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(70px)', opacity: 0.2 }} />

      {/* Floating particles */}
      {[
        { emoji: '🌟', x: -30, y: 15, delay: 0 }, { emoji: '📚', x: 20, y: 35, delay: 0.8 },
        { emoji: '🎯', x: -15, y: 55, delay: 1.5 }, { emoji: '🚀', x: 25, y: 72, delay: 2.2 },
        { emoji: '💡', x: -20, y: 88, delay: 0.4 }, { emoji: '🏆', x: 10, y: 22, delay: 1.8 },
      ].map((p, i) => <Particle key={i} {...p} />)}

      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          style={{ position: 'absolute', width: 2 + Math.random() * 3, height: 2 + Math.random() * 3, background: 'white', borderRadius: '50%', top: `${Math.random() * 80}%`, left: `${Math.random() * 100}%`, opacity: 0.4 }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%', maxWidth: 520, padding: '48px 40px',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 32,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          zIndex: 10, position: 'relative',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <BrainCircuit color="#fff" size={24} />
          </motion.div>
          <span style={{ fontSize: 26, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>LakshyAI</span>
        </div>

        {/* Big emoji progress ring */}
        <div style={{ position: 'relative', width: 180, height: 180, marginBottom: 36 }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
            <motion.circle
              cx="50" cy="50" r="44" fill="none"
              stroke="url(#progressGrad)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={276}
              animate={{ strokeDashoffset: 276 - (276 * progress) / 100 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={step}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                style={{ fontSize: 40, marginBottom: 4 }}
              >
                {STEPS[step]?.emoji}
              </motion.span>
            </AnimatePresence>
            <span style={{ fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>{Math.floor(progress)}%</span>
          </div>
        </div>

        {/* Heading */}
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 22, fontWeight: 800, color: 'white', margin: '0 0 8px', textAlign: 'center' }}>
          Building your roadmap...
        </motion.h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textAlign: 'center', margin: '0 0 32px', lineHeight: 1.5 }}>
          Personalizing your <span style={{ color: '#A78BFA', fontWeight: 700 }}>{careerLabel}</span> journey
        </p>

        {/* Step list */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {STEPS.map((s, idx) => {
            const done = step > idx;
            const active = step === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: idx <= step ? 1 : 0.3, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', background: done ? '#10B981' : active ? s.color : 'rgba(255,255,255,0.08)', border: active ? `2px solid ${s.color}` : 'none', transition: 'all 0.3s' }}>
                  {done
                    ? <CheckCircle2 size={14} color="white" />
                    : active
                      ? <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }} />
                      : <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>{idx + 1}</span>
                  }
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: done || active ? 'white' : 'rgba(255,255,255,0.35)', transition: 'color 0.3s' }}>
                  {done ? '✓ ' : ''}{s.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 4, marginBottom: 28, overflow: 'hidden' }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #6366F1, #EC4899)', borderRadius: 4 }}
          />
        </div>

        {/* Rotating tips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tipIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, width: '100%', textAlign: 'center' }}
          >
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{TIPS[tipIdx]}</span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
