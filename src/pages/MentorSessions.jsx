import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Clock, Star, Video, FileText, Play } from 'lucide-react';

const UPCOMING = [
  {
    id: 1,
    mentorName: 'Dr. Aris Thorne',
    mentorRole: 'AI Research Scientist',
    avatar: 'AT',
    avatarBg: '#6366F1',
    date: 'May 12, 2026',
    time: '2:00 PM',
    status: 'Confirmed',
  },
  {
    id: 2,
    mentorName: 'Sarah Jenkins',
    mentorRole: 'Senior Product Designer',
    avatar: 'SJ',
    avatarBg: '#8B5CF6',
    date: 'May 14, 2026',
    time: '10:30 AM',
    status: 'Confirmed',
  },
];

const PAST = [
  {
    id: 3,
    mentorName: 'Marcus Chen',
    mentorRole: 'Software Engineer @ Google',
    avatar: 'MC',
    avatarBg: '#10B981',
    date: 'Apr 28, 2026',
    time: '4:00 PM',
    status: 'Completed',
  },
  {
    id: 4,
    mentorName: 'Elena Rodriguez',
    mentorRole: 'Software Engineering Manager',
    avatar: 'ER',
    avatarBg: '#EC4899',
    date: 'Apr 15, 2026',
    time: '11:00 AM',
    status: 'Completed',
  },
];

const STATS = [
  { icon: <Clock size={18} color="#6366F1" />, label: 'Upcoming', value: '2', bg: '#EEF2FF', border: '#C7D2FE' },
  { icon: <Clock size={18} color="#10B981" />, label: 'Total Hours', value: '8.5', bg: '#ECFDF5', border: '#A7F3D0' },
  { icon: <Star size={18} color="#F59E0B" fill="#F59E0B" />, label: 'Avg. Rating', value: '4.9', bg: '#FFFBEB', border: '#FDE68A' },
];

export default function MentorSessions() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('upcoming');

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 48 }}>

      {/* Header */}
      <div style={{ background: 'white', padding: '32px 40px 24px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 6px', letterSpacing: '-0.02em', color: '#111827' }}>Mentor Sessions</h1>
            <p style={{ fontSize: 14, color: '#9CA3AF', margin: 0, fontWeight: 600 }}>Manage your upcoming and past career guidance calls</p>
          </div>
          <button
            onClick={() => navigate('/mentors')}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '13px 22px',
              background: '#6366F1', color: 'white', border: 'none', borderRadius: 14,
              fontWeight: 800, fontSize: 14, cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
            }}
          >
            <Plus size={18} /> Book New Session
          </button>
        </div>
      </div>

      <div style={{ padding: '28px 40px 0' }}>
        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
          {STATS.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              style={{
                background: 'white', borderRadius: 16, padding: '22px 24px',
                border: `1.5px solid ${stat.border}`, display: 'flex', alignItems: 'center', gap: 14,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: stat.bg, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', marginBottom: 2 }}>{stat.label}</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid #E5E7EB', marginBottom: 24 }}>
          {['upcoming', 'past'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{
                padding: '12px 24px', fontSize: 14, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer',
                color: tab === t ? '#6366F1' : '#9CA3AF',
                borderBottom: tab === t ? '2px solid #6366F1' : '2px solid transparent',
                marginBottom: -2, transition: 'all 0.15s', textTransform: 'capitalize',
              }}
            >
              {t === 'upcoming' ? 'Upcoming' : 'Past Sessions'}
            </button>
          ))}
        </div>

        {/* Sessions */}
        {tab === 'upcoming' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {UPCOMING.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                style={{ background: 'white', borderRadius: 18, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}
              >
                <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: s.avatarBg + '20', border: `2px solid ${s.avatarBg}30`, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16, fontWeight: 800, color: s.avatarBg, flexShrink: 0 }}>
                    {s.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 16, color: '#111827', marginBottom: 2 }}>{s.mentorName}</div>
                    <div style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 600 }}>{s.mentorRole}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#6B7280' }}>📅 {s.date} • {s.time}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#10B981', background: '#ECFDF5', padding: '4px 12px', borderRadius: 20, border: '1px solid #A7F3D0' }}>
                    {s.status}
                  </span>
                </div>
                <div style={{ height: 1, background: '#F9FAFB' }} />
                <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 700, color: '#6366F1', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FileText size={15} /> View Prep Notes
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 800, color: 'white', background: '#6366F1', border: 'none', borderRadius: 10, padding: '10px 20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(99,102,241,0.25)' }}>
                    <Video size={15} /> Join Meeting
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {tab === 'past' && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14, textAlign: 'center' }}>Recent Past</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {PAST.map((s, i) => (
                <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  style={{ background: 'white', borderRadius: 18, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}
                >
                  <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: s.avatarBg + '20', border: `2px solid ${s.avatarBg}30`, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16, fontWeight: 800, color: s.avatarBg, flexShrink: 0 }}>
                      {s.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16, color: '#111827', marginBottom: 2 }}>{s.mentorName}</div>
                      <div style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 600 }}>{s.mentorRole}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#6B7280' }}>📅 {s.date} • {s.time}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#9CA3AF', background: '#F3F4F6', padding: '4px 12px', borderRadius: 20 }}>
                      {s.status}
                    </span>
                  </div>
                  <div style={{ height: 1, background: '#F9FAFB' }} />
                  <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 700, color: '#6366F1', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <FileText size={15} /> View Prep Notes
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 700, color: '#374151', background: 'white', border: '1.5px solid #E5E7EB', borderRadius: 10, padding: '10px 20px', cursor: 'pointer' }}>
                      <Play size={15} /> Watch Recording
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
