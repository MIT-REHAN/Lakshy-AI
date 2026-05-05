import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Clock, Users, Sparkles, Filter } from 'lucide-react';

const MENTORS = [
  {
    id: 1,
    name: 'Dr. Aris Thorne',
    title: 'AI Research Lead',
    rating: 4.9,
    sessions: 320,
    experience: '10+ Years',
    tags: ['AI', 'Machine Learning', 'PhD'],
    desc: 'Former DeepMind researcher with 10+ years experience in neural architectures and career coaching.',
    fee: 85,
    available: 'Tomorrow at 10:00 AM',
    avatar: 'AT',
    avatarBg: '#6366F1',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    title: 'Senior Product Architect',
    rating: 4.8,
    sessions: 210,
    experience: '8 Years',
    tags: ['STEM', 'Architecture', 'Leadership'],
    desc: 'Helping students transition from engineering basics to high-level system design at Fortune 500 firms.',
    fee: 70,
    available: 'Today at 4:00 PM',
    avatar: 'SJ',
    avatarBg: '#8B5CF6',
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Venture Strategist',
    rating: 5.0,
    sessions: 415,
    experience: '12 Years',
    tags: ['MBA', 'Startups', 'Business'],
    desc: 'Specializing in career switches for professionals entering the tech ecosystem and startup world.',
    fee: 100,
    available: 'Tomorrow at 2:00 PM',
    avatar: 'MC',
    avatarBg: '#10B981',
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    title: 'Software Engineering Manager',
    rating: 4.7,
    sessions: 180,
    experience: '9 Years',
    tags: ['Coding', 'Big Tech', 'Mentorship'],
    desc: 'Expert in technical interview preparation and navigating the early years of a software engineering career.',
    fee: 65,
    available: 'Today at 6:00 PM',
    avatar: 'ER',
    avatarBg: '#EC4899',
  },
  {
    id: 5,
    name: 'David Park',
    title: 'Data Science Consultant',
    rating: 4.9,
    sessions: 290,
    experience: '7 Years',
    tags: ['Analytics', 'Python', 'STEM'],
    desc: 'Bridging the gap between academic theory and industrial data application for graduating PhD students.',
    fee: 75,
    available: 'Tomorrow at 11:00 AM',
    avatar: 'DP',
    avatarBg: '#F59E0B',
  },
  {
    id: 6,
    name: 'Amina Qureshi',
    title: 'UX Research Director',
    rating: 4.8,
    sessions: 155,
    experience: '6 Years',
    tags: ['Design', 'Psychology', 'Product'],
    desc: 'Focusing on the intersection of human behavior and digital products. Guiding the next gen of researchers.',
    fee: 60,
    available: 'Today at 3:00 PM',
    avatar: 'AQ',
    avatarBg: '#EF4444',
  },
];

const ALL_TAGS = ['All', 'AI', 'Machine Learning', 'STEM', 'Coding', 'MBA', 'Design', 'Startups', 'Analytics', 'Python'];

export default function MentorListing() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const filtered = MENTORS.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchTag = activeTag === 'All' || m.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 48 }}>

      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        padding: '48px 40px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -40, left: 100, width: 200, height: 200, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 14px', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Sparkles size={13} color="white" />
              <span style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>AI-Powered Matching</span>
            </div>
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: 'white', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
            Get Guidance from Top Career Experts
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: '0 0 32px', maxWidth: 540, lineHeight: 1.6 }}>
            Connect with industry leaders and academic pioneers to navigate your professional growth journey.
          </p>

          {/* Search bar */}
          <div style={{ display: 'flex', gap: 12, maxWidth: 560 }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, background: 'white', borderRadius: 14, padding: '12px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <Search size={18} color="#9CA3AF" />
              <input
                type="text"
                placeholder="Search by name, skill, or domain..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, color: '#111827', background: 'transparent' }}
              />
            </div>
            <button style={{ background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 14, padding: '0 18px', color: 'white', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, backdropFilter: 'blur(8px)' }}>
              <Filter size={16} /> Filter
            </button>
          </div>
        </motion.div>
      </div>

      {/* Tag Filter */}
      <div style={{ padding: '24px 40px 0', display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: -24, position: 'relative', zIndex: 10 }}>
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            style={{
              padding: '8px 18px', fontSize: 13, fontWeight: 600, borderRadius: 32, cursor: 'pointer',
              background: activeTag === tag ? '#6366F1' : 'white',
              color: activeTag === tag ? 'white' : '#374151',
              border: activeTag === tag ? '2px solid #6366F1' : '1.5px solid #E5E7EB',
              boxShadow: activeTag === tag ? '0 4px 12px rgba(99,102,241,0.25)' : '0 1px 4px rgba(0,0,0,0.06)',
              transition: 'all 0.15s',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Section heading */}
      <div style={{ padding: '28px 40px 16px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 4px' }}>Featured Experts</h2>
        <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
          {filtered.length} top-rated mentors currently available for 1-on-1 sessions
        </p>
      </div>

      {/* Mentor Grid */}
      <div style={{ padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {filtered.map((mentor, idx) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            style={{
              background: 'white',
              borderRadius: 20,
              border: '1.5px solid #F3F4F6',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              cursor: 'pointer',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(99,102,241,0.12)' }}
            onClick={() => navigate(`/mentors/${mentor.id}`)}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 16,
                background: mentor.avatarBg + '20',
                border: `2px solid ${mentor.avatarBg}30`,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                fontSize: 16, fontWeight: 800, color: mentor.avatarBg, flexShrink: 0,
              }}>
                {mentor.avatar}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#111827', lineHeight: 1.2 }}>{mentor.name}</div>
                <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 600, marginTop: 2 }}>{mentor.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                  <Star size={13} fill="#F59E0B" color="#F59E0B" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{mentor.rating}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {mentor.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
                  background: '#EEF2FF', color: '#6366F1', border: '1px solid #C7D2FE',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Desc */}
            <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{mentor.desc}</p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Users size={13} color="#9CA3AF" />
                <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>{mentor.sessions} sessions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Clock size={13} color="#9CA3AF" />
                <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>{mentor.experience}</span>
              </div>
            </div>

            {/* Book CTA */}
            <button
              onClick={e => { e.stopPropagation(); navigate(`/mentors/${mentor.id}`); }}
              style={{
                width: '100%', padding: '12px', fontSize: 14, fontWeight: 700,
                background: '#6366F1', color: 'white', border: 'none',
                borderRadius: 12, cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#4F46E5'}
              onMouseOut={e => e.currentTarget.style.background = '#6366F1'}
            >
              Book Meeting — ₹{mentor.fee * 85}/session
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
