import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Edit3, Award, Bookmark, LogOut, ChevronRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { userData, insights } = useUser();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const name = userData?.name || 'Guest User';
  const role = userData?.role || userData?.type || 'Student';
  const exams = userData?.exams || [];

  const handleLogout = () => {
    localStorage.removeItem('lakshyai_user');
    window.location.href = '/';
  };

  const handleRetake = () => {
    localStorage.removeItem('lakshyai_user');
    navigate('/onboarding');
  };

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 60 }}>

      {/* Hero Header */}
      <div style={{ padding: '40px 40px 32px', background: 'linear-gradient(160deg, #EEF2FF 0%, #F5F3FF 60%, #F9FAFB 100%)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Avatar */}
          <div style={{ position: 'relative', marginBottom: 20 }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 32px rgba(90,93,255,0.3)', border: '4px solid white' }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: 'white' }}>
                {name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <button style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderRadius: '50%', background: 'white', border: '1px solid var(--divider)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <Edit3 size={14} color="var(--primary)" />
            </button>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 6px' }}>{name}</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 20px', fontWeight: 500 }}>
            {role} • {userData?.type || 'Student'} on {insights?.career} path
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ padding: '8px 18px', background: '#D1FAE5', color: '#047857', borderRadius: 20, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Award size={14} /> Level 1 Learner
            </div>
            {exams.slice(0, 2).map(exam => (
              <div key={exam} style={{ padding: '8px 18px', background: '#EEF2FF', color: 'var(--primary)', borderRadius: 20, fontSize: 13, fontWeight: 700 }}>
                {exam}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 40px', maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Career Focus Card */}
        <motion.div className="card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ padding: 24, background: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Career Focus</span>
            <button onClick={handleRetake} className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: 12 }}>Change Goal</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Target size={22} color="var(--primary)" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--primary)' }}>{insights?.career || 'Not set'}</h3>
              <span style={{ fontSize: 13, color: 'var(--hint)' }}>
                Based on: {exams.join(', ') || 'N/A'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Salary & Demand */}
        {insights && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="card" style={{ padding: '20px 24px', background: 'white' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--hint)', marginBottom: 8 }}>TARGET SALARY</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#10B981' }}>{insights.salary?.split('|')[0]?.trim()}</div>
            </div>
            <div className="card" style={{ padding: '20px 24px', background: 'white' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--hint)', marginBottom: 8 }}>JOB GROWTH</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <TrendingUp size={16} color="#10B981" />
                <div style={{ fontSize: 17, fontWeight: 800, color: '#10B981' }}>{insights.jobGrowth || '+22% YoY'}</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Links */}
        <motion.div className="card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ background: 'white', overflow: 'hidden' }}>
          {[
            { label: 'View My Roadmap', icon: BookOpen, color: 'var(--primary)', bg: '#EEF2FF', action: () => navigate('/roadmap') },
            { label: 'Explore Colleges', icon: Award, color: '#D97706', bg: '#FEF3C7', action: () => navigate('/colleges') },
            { label: 'Ask AI Mentor', icon: Target, color: '#10B981', bg: '#D1FAE5', action: () => navigate('/chat') },
            { label: 'App Settings', icon: Settings, color: 'var(--hint)', bg: '#F3F4F6', action: () => {} },
          ].map((item, idx, arr) => (
            <div key={idx} onClick={item.action} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: idx < arr.length - 1 ? '1px solid var(--divider)' : 'none', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.background = '#FAFBFF'}
              onMouseOut={e => e.currentTarget.style.background = 'white'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: item.bg, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <item.icon size={18} color={item.color} />
                </div>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{item.label}</span>
              </div>
              <ChevronRight size={18} color="var(--hint)" />
            </div>
          ))}
        </motion.div>

        {/* Logout Button */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          {!showLogoutConfirm ? (
            <button
              onClick={() => setShowLogoutConfirm(true)}
              style={{ width: '100%', padding: '18px', background: 'white', border: '1px solid #FECACA', borderRadius: 16, color: '#EF4444', fontWeight: 700, fontSize: 15, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = '#FEF2F2'}
              onMouseOut={e => e.currentTarget.style.background = 'white'}
            >
              <LogOut size={18} /> Sign Out
            </button>
          ) : (
            <div className="card" style={{ padding: 24, background: '#FEF2F2', border: '1px solid #FECACA', textAlign: 'center' }}>
              <p style={{ fontWeight: 700, margin: '0 0 16px', color: '#991B1B' }}>Are you sure you want to sign out?</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button onClick={() => setShowLogoutConfirm(false)} className="btn btn-secondary" style={{ padding: '10px 24px' }}>Cancel</button>
                <button onClick={handleLogout} style={{ padding: '10px 24px', background: '#EF4444', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>Yes, Sign Out</button>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
