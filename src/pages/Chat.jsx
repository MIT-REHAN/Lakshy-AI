import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, BrainCircuit, Trash2, Download, Plus, Sparkles, BookOpen, GraduationCap, TrendingUp, ExternalLink } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

// Smart AI responder — generates contextual answers using user's insights
function generateAIResponse(input, insights, userName) {
  const q = input.toLowerCase();
  const career = insights.career;
  const salary = insights.salary;
  const exams = (insights.courses || []).map(c => c.title).join(', ');
  const skills = (insights.skills || []).slice(0, 3).join(', ');
  const topCollege = insights.colleges?.[0]?.name || 'a top institution';
  const roadPhase1 = insights.roadmap?.[0]?.title || 'Foundation Phase';

  // Keyword routing
  if (q.includes('salary') || q.includes('earn') || q.includes('pay') || q.includes('income')) {
    return `💰 Great question! For a **${career}**, here's the salary landscape:\n\n**India:** ${insights.salary}\n**Growth trajectory:** Entry → Mid → Senior sees a typical 3–4x salary jump over 7–8 years.\n\nYour personalized roadmap is designed to get you to the mid-senior range within **4–5 years**. Want me to break down the specific roles and their pay?`;
  }

  if (q.includes('skill') || q.includes('learn') || q.includes('what should i study')) {
    return `🎯 Here are the **top skills** you need for **${career}**:\n\n${(insights.skills || []).map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nStart with foundational skills first, then stack advanced ones. Which skill would you like a deep-dive learning plan for?`;
  }

  if (q.includes('college') || q.includes('university') || q.includes('admission') || q.includes('institution')) {
    const colleges = insights.colleges?.slice(0, 3).map(c => `• **${c.name}** – ${c.location} (${c.fees})`).join('\n') || '';
    return `🎓 Based on your profile, here are your **top college recommendations**:\n\n${colleges}\n\n${insights.colleges?.[0]?.name?.includes('PW IOI') ? '⭐ PW Institute of Innovation has campuses across Bangalore, Pune, Indore, Lucknow, Noida & Patna — excellent placement record!' : ''}\n\nShould I compare these colleges on fees, placements, or cutoffs?`;
  }

  if (q.includes('course') || q.includes('batch') || q.includes('pw') || q.includes('study material')) {
    const courseList = (insights.courses || []).map((c, i) => `${i + 1}. **${c.title}** — *${c.source}*`).join('\n');
    return `📚 Here are the **best courses** curated for your goal:\n\n${courseList}\n\nAll these are from trusted sources like Physics Wallah (PW.live) and PW Skills. Would you like direct enrollment links or a study schedule?`;
  }

  if (q.includes('roadmap') || q.includes('plan') || q.includes('steps') || q.includes('how to')) {
    const phases = (insights.roadmap || []).map(p => `**Phase ${p.id} – ${p.title}** (${p.duration}): ${p.items.join(', ')}`).join('\n\n');
    return `🗺️ Here is your **personalized roadmap** for ${career}:\n\n${phases}\n\nThis is aligned with the **roadmap.sh** framework. Want a weekly schedule or specific study hours breakdown?`;
  }

  if (q.includes('future') || q.includes('scope') || q.includes('opportunity') || q.includes('trend')) {
    return `📈 **Future Scope for ${career}**:\n\n${insights.futureScope}\n\n**Industry Trend:** ${insights.industryTrend}\n**Job Growth:** ${insights.jobGrowth}\n\nThe next 5 years look very strong for this path. Want me to list specific companies hiring in this space?`;
  }

  if (q.includes('neet') || q.includes('jee') || q.includes('gate') || q.includes('upsc') || q.includes('exam')) {
    const course = insights.courses?.[0];
    return `📝 For your exam preparation, I recommend:\n\n**${course?.title}** offered by **${course?.source}**\n\nThis is one of the most trusted batches in India. Key strategy:\n• Start with NCERT/basics\n• Daily practice problems (DPPs)\n• Weekly full mock tests\n• Analyze every mistake\n\nWhich exam topic is giving you the most trouble right now?`;
  }

  if (q.includes('job') || q.includes('placement') || q.includes('hire') || q.includes('work')) {
    return `💼 Great career question! For **${career}** roles:\n\n• **Entry level:** Focus on ${skills}\n• **Where to apply:** LinkedIn, Naukri, Internshala, company career pages\n• **Top hiring companies** in this space include tech firms, startups, and MNCs\n\nYour first job target should be around **${insights.salary.split('|')[0].trim()}** range. Should I help you build a resume strategy?`;
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste')) {
    return `👋 Hello ${userName}! I'm your AI Career Mentor, fully loaded with insights for your **${career}** journey.\n\nHere's what I can help you with:\n• 📚 Study plans & courses\n• 🎓 College recommendations\n• 💰 Salary benchmarks\n• 🗺️ Career roadmaps\n• 🧠 Skill guidance\n\nWhat would you like to explore today?`;
  }

  // Generic response
  return `🤔 Great question about **"${input}"**!\n\nFor your career path in **${career}**, this is highly relevant. Here's my take:\n\n• Your first phase should be: **${roadPhase1}**\n• Key skills to build: ${skills}\n• Target salary band: ${salary}\n\nWant a more specific answer? Try asking about:\n*"What skills do I need?"* or *"Show me the roadmap"* or *"Which colleges are best?"*`;
}

const SUGGESTION_SETS = {
  default: [
    '📚 What courses should I take?',
    '💰 What is the salary for my career?',
    '🎓 Which colleges are best for me?',
    '🗺️ Show me my full roadmap',
  ],
  followup: [
    '🧠 What skills should I learn next?',
    '📈 What is the future scope?',
    '💼 How do I get my first job?',
    '🎯 Best exam strategy for me?',
  ],
};

export default function Chat() {
  const { userData, insights } = useUser();
  const userName = userData?.name?.split(' ')[0] || 'there';

  if (!insights) return <Navigate to="/onboarding" replace />;

  const getInitialMessage = () => `👋 Hello **${userName}**! I'm your AI Career Mentor, powered by LakshyAI.\n\nI've analyzed your profile and I'm ready to guide you on your **${insights.career}** journey.\n\nHere's a quick snapshot:\n• 🎯 Target: ${insights.career}\n• 💰 Salary Range: ${insights.salary}\n• 📈 Market Demand: ${insights.demand}\n\nAsk me anything — roadmap, courses, colleges, skills, or salary details!`;

  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', text: getInitialMessage(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestionSet, setSuggestionSet] = useState('default');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text, time: timeStr }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAIResponse(text, insights, userName);
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsTyping(false);
      setSuggestionSet('followup');
    }, 900 + Math.random() * 600);
  };

  const handleClear = () => {
    setMessages([{ id: 1, type: 'ai', text: getInitialMessage(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setSuggestionSet('default');
  };

  // Render markdown-style bold text
  const renderText = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1
        ? <strong key={i} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part}</strong>
        : <span key={i}>{part}</span>
    );
  };

  return (
    <div style={{ backgroundColor: '#F9FAFB', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Header */}
      <div style={{ padding: '24px 40px', background: 'white', borderBottom: '1px solid var(--divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BrainCircuit size={24} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>AI Career Mentor</h1>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', display: 'inline-block' }} />
              Online • Personalized for {insights.career}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={handleClear} className="btn btn-secondary" style={{ gap: 6, fontSize: 13 }}>
            <Trash2 size={14} /> Clear
          </button>
          <button className="btn btn-secondary" style={{ gap: 6, fontSize: 13 }}>
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      {/* Context Banner */}
      <div style={{ padding: '12px 40px', background: 'linear-gradient(90deg, #EEF2FF, #F5F3FF)', borderBottom: '1px solid #E0E7FF', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { icon: <TrendingUp size={13} />, label: 'Career', value: insights.career },
            { icon: <BookOpen size={13} />, label: 'Salary', value: insights.salary?.split('|')[0]?.trim() },
            { icon: <GraduationCap size={13} />, label: 'Demand', value: insights.demand },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>{item.label}:</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <AnimatePresence>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start', gap: 12 }}
            >
              {msg.type === 'ai' && (
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, marginTop: 4 }}>
                  <BrainCircuit size={18} color="white" />
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                <div style={{
                  padding: '16px 20px',
                  borderRadius: msg.type === 'user' ? '20px 20px 4px 20px' : '4px 20px 20px 20px',
                  background: msg.type === 'user' ? 'var(--primary)' : 'white',
                  color: msg.type === 'user' ? 'white' : 'var(--text-primary)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  boxShadow: msg.type === 'user' ? '0 4px 16px rgba(90,93,255,0.25)' : '0 2px 8px rgba(0,0,0,0.06)',
                  border: msg.type === 'ai' ? '1px solid var(--divider)' : 'none',
                  whiteSpace: 'pre-line',
                }}>
                  {msg.type === 'ai' ? renderText(msg.text) : msg.text}
                </div>
                <span style={{ fontSize: 11, color: 'var(--hint)', marginTop: 6, fontWeight: 500 }}>{msg.time}</span>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BrainCircuit size={18} color="white" />
              </div>
              <div style={{ padding: '16px 20px', borderRadius: '4px 20px 20px 20px', background: 'white', border: '1px solid var(--divider)', display: 'flex', gap: 4, alignItems: 'center' }}>
                {[0, 1, 2].map(i => (
                  <motion.div key={i} animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                    style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', opacity: 0.6 }} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Input Area */}
      <div style={{ padding: '20px 40px 28px', background: 'white', borderTop: '1px solid var(--divider)', flexShrink: 0 }}>
        {/* Suggestions */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {SUGGESTION_SETS[suggestionSet].map((sug, i) => (
            <button
              key={i}
              onClick={() => handleSend(sug)}
              style={{
                padding: '8px 16px', fontSize: 13, borderRadius: 20,
                background: '#F5F3FF', color: 'var(--primary)', border: '1px solid #DDD6FE',
                fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#EDE9FE'}
              onMouseOut={e => e.currentTarget.style.background = '#F5F3FF'}
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Input row */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: '#F9FAFB', border: '1px solid var(--divider)', borderRadius: 16, padding: '8px 8px 8px 20px' }}>
          <Sparkles size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend(input)}
            placeholder={`Ask anything about ${insights.career}...`}
            style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 15, color: 'var(--text-primary)', padding: '8px 0' }}
          />
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
            style={{
              padding: '12px 24px', borderRadius: 12, fontWeight: 700, fontSize: 14,
              background: input.trim() ? 'var(--primary)' : '#E5E7EB',
              color: input.trim() ? 'white' : '#9CA3AF',
              border: 'none', cursor: input.trim() ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s',
            }}
          >
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
