import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, User, Briefcase, GraduationCap, Compass, Check, BrainCircuit, Target, MapPin, ChevronLeft, Sparkles } from 'lucide-react';
import { useUser } from '../context/UserContext';

const steps = [
  { id: 'type',       title: "Let's find your path 🚀",      subtitle: "Select the profile that best describes you" },
  { id: 'experience', title: "Tell us your interests 🎯",     subtitle: "Step 2 of 3 — We'll personalise everything for you" },
  { id: 'info',       title: "Almost there! ✨",              subtitle: "Just a few details to generate your AI roadmap" },
];

const data = {
  type: [
    { id: 'Student',        label: '🎓 Student',            desc: 'School, UG or PG student looking for direction',     icon: GraduationCap },
    { id: 'Professional',   label: '💼 Professional',       desc: 'Working professional wanting to grow or upskill',     icon: Briefcase },
    { id: 'Career Switcher',label: '🔄 Career Switcher',    desc: 'Ready to transition into a completely new field',     icon: Compass },
    { id: 'Self-Learner',   label: '📚 Self-Learner',       desc: 'Lifelong learner exploring skills independently',     icon: User },
  ],
  experience: [
    { id: 'Beginner',      label: '🌱 Beginner',      desc: 'Starting fresh, just exploring.',          icon: GraduationCap },
    { id: 'Intermediate',  label: '⚡ Intermediate',  desc: 'Have some knowledge and small projects.',  icon: BrainCircuit },
    { id: 'Advanced',      label: '🏆 Advanced',      desc: 'Deep expertise, seeking specialization.',  icon: Target },
  ],
  exams: [
    { label: '🏗️ JEE (B.Tech Entrance)', id: 'JEE' },
    { label: '🩺 NEET (Medical)',         id: 'NEET' },
    { label: '⚙️ GATE (M.Tech / PSU)',   id: 'GATE' },
    { label: '🇮🇳 UPSC (Civil Services)', id: 'UPSC' },
    { label: '💼 Management / BBA',       id: 'Management' },
    { label: '💻 Coding & Development',   id: 'Coding & Development' },
    { label: '🎨 UI/UX Design',           id: 'UI/UX Design' },
    { label: '📊 Data Science / AI',      id: 'Data Science' },
    { label: '🤖 Robotics & AI',          id: 'Robotics & AI' },
    { label: '💰 Business & Finance',     id: 'Business & Finance' },
    { label: '📋 Other',                  id: 'Other Exam' },
  ],
  goal: [
    { id: 'job',    emoji: '💼', label: 'Get a High-Paying Job',    desc: 'Industry-ready skills and top placements.' },
    { id: 'switch', emoji: '🔄', label: 'Switch Career Path',       desc: 'Leverage your experience for a new industry.' },
    { id: 'exam',   emoji: '🏆', label: 'Crack Competitive Exam',   desc: 'JEE / NEET / UPSC / GATE structured prep.' },
  ],
  classOptions: [
    { label: '📗 Class 10',            id: '10th' },
    { label: '📘 Class 11',            id: '11th' },
    { label: '📙 Class 12',            id: '12th' },
    { label: '🔄 Dropper',             id: 'Dropper' },
    { label: '🎓 B.Tech (Enrolled)',   id: 'B.Tech' },
    { label: '🔬 M.Tech (Enrolled)',   id: 'M.Tech' },
    { label: '🏢 BBA / BCom',          id: 'BBA' },
    { label: '👔 Working Professional',id: 'Working Professional' },
  ],
};

export default function Onboarding() {
  const navigate = useNavigate();
  const { saveUserData } = useUser();
  const [step, setStep]     = useState(0);
  const [sel, setSel]       = useState({ type: null, experience: null, exams: [], goal: null, name: '', role: '' });

  const current = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      saveUserData({ ...sel, role: sel.role || sel.type });
      navigate('/loading');
    }
  };
  const handleBack = () => step > 0 ? setStep(s => s - 1) : navigate('/');

  const toggleExam = (id) => setSel(prev => ({
    ...prev,
    exams: prev.exams.includes(id) ? prev.exams.filter(e => e !== id) : [...prev.exams, id],
  }));

  const isNextDisabled = () => {
    if (step === 0) return !sel.type;
    if (step === 1) return !sel.experience || sel.exams.length === 0 || !sel.goal;
    if (step === 2) return !sel.name || !sel.role;
    return true;
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #FAFBFF 0%, #F0EFFF 100%)', position: 'relative', overflowX: 'hidden' }}>

      {/* Soft blobs */}
      <div style={{ position: 'fixed', top: '-15%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, #C7D2FE 0%, transparent 70%)', borderRadius: '50%', opacity: 0.5, zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-15%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, #DDD6FE 0%, transparent 70%)', borderRadius: '50%', opacity: 0.4, zIndex: 0, pointerEvents: 'none' }} />

      {/* Top Nav */}
      <div style={{ padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BrainCircuit color="#fff" size={20} />
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)' }}>LakshyAI</span>
        </div>

        {/* Step pills */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {steps.map((_, i) => (
            <div key={i} style={{ width: step === i ? 28 : 8, height: 8, borderRadius: 4, background: step >= i ? 'var(--primary)' : '#DDD6FE', transition: 'width 0.3s, background 0.3s' }} />
          ))}
        </div>

        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--hint)' }}>Step {step + 1} of {steps.length}</span>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px 80px', position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* ── STEP 1: Profile Type ─────────────────────────────────────── */}
            {step === 0 && (
              <>
                <div style={{ textAlign: 'center', margin: '40px 0 48px' }}>
                  <h1 style={{ fontSize: 38, fontWeight: 800, margin: '0 0 12px' }}>{current.title}</h1>
                  <p style={{ fontSize: 16, color: 'var(--text-secondary)' }}>{current.subtitle}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 48 }}>
                  {data.type.map(item => {
                    const on = sel.type === item.id;
                    return (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSel({ ...sel, type: item.id })}
                        style={{
                          border: on ? '2px solid var(--primary)' : '1.5px solid #E5E7EB',
                          borderRadius: 24, padding: '36px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center',
                          textAlign: 'center', cursor: 'pointer', background: on ? '#F5F3FF' : 'white',
                          boxShadow: on ? '0 8px 24px rgba(99,102,241,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                          transition: 'border 0.2s, background 0.2s, box-shadow 0.2s',
                        }}
                      >
                        <div style={{ width: 64, height: 64, borderRadius: '50%', background: on ? 'var(--primary)' : '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20, transition: 'background 0.2s' }}>
                          <item.icon size={30} color={on ? 'white' : 'var(--primary)'} />
                        </div>
                        <div style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>{item.label}</div>
                        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                        {on && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ marginTop: 16, width: 26, height: 26, borderRadius: '50%', background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Check size={14} color="white" />
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="btn btn-primary" onClick={handleNext} disabled={isNextDisabled()}
                    style={{ width: 320, padding: '18px', fontSize: 16, borderRadius: 32, gap: 10 }}
                  >
                    Continue <ArrowRight size={18} />
                  </motion.button>
                </div>
              </>
            )}

            {/* ── STEP 2: Experience + Exams + Goal ─────────────────────────── */}
            {step === 1 && (
              <>
                <div style={{ textAlign: 'center', margin: '32px 0 36px' }}>
                  <h1 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 10px' }}>{current.title}</h1>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)' }}>{current.subtitle}</p>
                </div>

                {/* Experience Level */}
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>📊 What is your experience level?</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                    {data.experience.map(item => {
                      const on = sel.experience === item.id;
                      return (
                        <motion.div key={item.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          onClick={() => setSel({ ...sel, experience: item.id })}
                          style={{ border: on ? '2px solid var(--primary)' : '1.5px solid #E5E7EB', borderRadius: 18, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer', background: on ? '#F5F3FF' : 'white', transition: 'all 0.2s' }}
                        >
                          <div style={{ width: 44, height: 44, borderRadius: '50%', background: on ? 'var(--primary)' : '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                            <item.icon size={22} color={on ? 'white' : 'var(--primary)'} />
                          </div>
                          <div style={{ fontSize: 15, fontWeight: 700, margin: '0 0 4px' }}>{item.label}</div>
                          <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Interests / Exams */}
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 6px' }}>🎯 What is your goal or passion?</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 16px' }}>Select all that apply — AI will build a personalised roadmap just for you.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {data.exams.map(exam => {
                      const on = sel.exams.includes(exam.id);
                      return (
                        <motion.button key={exam.id} whileTap={{ scale: 0.94 }}
                          onClick={() => toggleExam(exam.id)}
                          style={{
                            padding: '10px 18px', fontSize: 14, borderRadius: 32, fontWeight: 600,
                            background: on ? 'var(--primary)' : 'white',
                            color: on ? 'white' : 'var(--text-primary)',
                            border: on ? '2px solid var(--primary)' : '1.5px solid #E5E7EB',
                            cursor: 'pointer', transition: 'all 0.15s',
                            boxShadow: on ? '0 4px 12px rgba(99,102,241,0.2)' : 'none',
                          }}
                        >
                          {exam.label}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Goal */}
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>🏁 What is your primary goal?</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {data.goal.map(item => {
                      const on = sel.goal === item.id;
                      return (
                        <motion.div key={item.id} whileHover={{ x: 4 }} whileTap={{ scale: 0.99 }}
                          onClick={() => setSel({ ...sel, goal: item.id })}
                          style={{
                            padding: '18px 24px', borderRadius: 18,
                            border: on ? '2px solid var(--primary)' : '1.5px solid #E5E7EB',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            cursor: 'pointer', background: on ? '#F5F3FF' : 'white', transition: 'all 0.15s',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <span style={{ fontSize: 28 }}>{item.emoji}</span>
                            <div>
                              <div style={{ fontSize: 15, fontWeight: 700 }}>{item.label}</div>
                              <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{item.desc}</div>
                            </div>
                          </div>
                          <div style={{ width: 22, height: 22, borderRadius: '50%', border: on ? '6px solid var(--primary)' : '2px solid #D1D5DB', flexShrink: 0 }} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button onClick={handleBack} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="btn btn-primary" onClick={handleNext} disabled={isNextDisabled()}
                    style={{ padding: '16px 32px', borderRadius: 32, gap: 8 }}
                  >
                    Continue <ArrowRight size={16} />
                  </motion.button>
                </div>
              </>
            )}

            {/* ── STEP 3: Name + Class ──────────────────────────────────────── */}
            {step === 2 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)', gap: 56, marginTop: 32, alignItems: 'start' }}>

                {/* Left informational block */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <button onClick={handleBack} style={{ width: 40, height: 40, border: '1.5px solid #E5E7EB', background: 'white', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginBottom: 40 }}>
                    <ChevronLeft size={20} color="var(--text-primary)" />
                  </button>

                  <div style={{ fontSize: 38, marginBottom: 16 }}>✨</div>
                  <h1 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 20px', lineHeight: 1.2 }}>Almost there!</h1>
                  <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 32 }}>
                    Just tell us your name and current phase — we'll generate a <strong>fully personalized AI roadmap</strong> with courses, colleges, and salary insights in seconds.
                  </p>

                  <div style={{ padding: '16px 20px', background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Sparkles size={18} color="var(--primary)" />
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Your data is only used for career matching — never shared or sold.
                    </span>
                  </div>
                </div>

                {/* Right form card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
                  className="card"
                  style={{ padding: 40, borderRadius: 24, background: 'white', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
                >
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px' }}>Tell us about yourself 👋</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: '0 0 28px', lineHeight: 1.5 }}>
                    This helps us tailor your roadmap to your exact level.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    {/* Name */}
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>Full Name</label>
                      <div style={{ position: 'relative' }}>
                        <User size={16} color="var(--hint)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          type="text"
                          className="input-field"
                          placeholder="e.g. Riya Sharma"
                          value={sel.name}
                          onChange={e => setSel({ ...sel, name: e.target.value })}
                          style={{ paddingLeft: 40, width: '100%', borderRadius: 12, boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    {/* Class */}
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>📚 Current Phase / Class</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {data.classOptions.map(opt => (
                          <motion.button
                            key={opt.id}
                            whileTap={{ scale: 0.94 }}
                            onClick={() => setSel({ ...sel, role: opt.id })}
                            style={{
                              padding: '9px 14px', fontSize: 13, borderRadius: 24, fontWeight: 600,
                              background: sel.role === opt.id ? 'var(--primary)' : 'white',
                              color: sel.role === opt.id ? 'white' : 'var(--text-primary)',
                              border: sel.role === opt.id ? '2px solid var(--primary)' : '1.5px solid #E5E7EB',
                              cursor: 'pointer', transition: 'all 0.15s',
                              boxShadow: sel.role === opt.id ? '0 4px 12px rgba(99,102,241,0.2)' : 'none',
                            }}
                          >
                            {opt.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 8 }}>📍 Location (Optional)</label>
                      <div style={{ position: 'relative' }}>
                        <MapPin size={16} color="var(--hint)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                          type="text"
                          className="input-field"
                          placeholder="e.g. Mumbai, India"
                          value={sel.location || ''}
                          onChange={e => setSel({ ...sel, location: e.target.value })}
                          style={{ paddingLeft: 40, width: '100%', borderRadius: 12, boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className="btn btn-primary"
                      onClick={handleNext}
                      disabled={isNextDisabled()}
                      style={{ width: '100%', padding: '17px', fontSize: 16, borderRadius: 32, gap: 10, marginTop: 4 }}
                    >
                      <BrainCircuit size={18} /> Generate My Roadmap 🚀
                    </motion.button>
                    <div style={{ textAlign: 'center', display: 'flex', gap: 24, justifyContent: 'center', fontSize: 12, color: 'var(--primary)', fontWeight: 600 }}>
                      <span>Privacy Policy</span>
                      <span>Terms of Service</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
