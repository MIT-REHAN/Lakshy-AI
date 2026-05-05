import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Users, CheckCircle2, MessageSquare, BadgeCheck, Video, FileText } from 'lucide-react';

const MENTORS = [
  {
    id: 1,
    name: 'Dr. Aris Thorne',
    title: 'AI Research Lead',
    rating: 4.9,
    sessions: 320,
    experience: '10+ Years',
    tags: ['AI', 'Machine Learning', 'PhD'],
    about: 'Dr. Aris Thorne is a distinguished AI researcher and career strategist with over a decade of experience guiding students from undergraduate levels to cutting-edge research roles at top global labs. Formerly a researcher at DeepMind, he specializes in identifying unique career trajectories that align with individual strengths and industry demand.',
    achievements: [
      'Global AI Mentor of the Year 2023',
      'Published 30+ Research Papers in Neural Architecture',
      'Helped 200+ students land roles at FAANG companies',
    ],
    reviews: [
      { name: 'Rahul K.', role: 'ML Engineer @ Google', text: "Dr. Thorne's roadmap was the turning point in my career. I went from confused to landing my dream AI role." },
      { name: 'Anita M.', role: 'PhD Candidate, IIT', text: 'Invaluable advice on my research proposal. His expertise in STEM is unmatched.' },
    ],
    fee: 349,
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
    about: 'Sarah Jenkins is a Senior Product Architect with 8 years helping engineers transition from academia to Fortune 500 tech roles. She specializes in system design, technical leadership, and building career roadmaps for ambitious engineers.',
    achievements: [
      'Led architecture teams at Amazon & Microsoft',
      'Mentored 150+ engineers into senior roles',
      'Speaker at Google I/O 2022',
    ],
    reviews: [
      { name: 'Priya S.', role: 'SDE @ Amazon', text: 'Sarah helped me crack Amazon system design in just 4 sessions. Incredible mentor!' },
      { name: 'Ravi M.', role: 'Engineering Lead', text: 'Her structured approach to career growth is unmatched.' },
    ],
    fee: 299,
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
    about: 'Michael Chen is a venture strategist and MBA coach who has helped professionals from diverse backgrounds transition into the startup ecosystem. With 12 years of experience across Silicon Valley and Southeast Asia, he brings a global perspective to career strategy.',
    achievements: [
      'Founded 2 successful startups (acquired)',
      'Advisor at Y Combinator cohort companies',
      'Placed 300+ professionals in startup leadership roles',
    ],
    reviews: [
      { name: 'Karan L.', role: 'Product Manager @ Startup', text: 'Michael helped me make the leap from corporate to startup. Best decision ever.' },
      { name: 'Shreya P.', role: 'MBA Graduate', text: 'His business acumen and mentoring style are simply world-class.' },
    ],
    fee: 399,
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
    about: 'Elena Rodriguez is a Software Engineering Manager at a leading tech firm, specializing in technical interview preparation and early-career engineering mentorship. She has a track record of helping students navigate the early, often overwhelming years of a software career.',
    achievements: [
      'Managed 50+ engineer teams at Big Tech',
      'Top-rated technical interview coach',
      'Keynote at Women in Tech Summit 2023',
    ],
    reviews: [
      { name: 'Amit R.', role: 'SWE @ Meta', text: "Elena's mock interviews were tougher than the real thing — and that's exactly what I needed." },
      { name: 'Neha V.', role: 'Junior Developer', text: 'Her advice on navigating the first job was incredibly practical.' },
    ],
    fee: 249,
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
    about: 'David Park bridges the gap between academic data science and industrial application. With 7 years consulting for Fortune 500 companies, he helps PhD students and fresh graduates transition into high-impact data roles.',
    achievements: [
      'Consulted for Netflix, Uber, and Bloomberg',
      'Open-source contributor with 5K+ GitHub stars',
      'Helped 180+ students land Data Science roles',
    ],
    reviews: [
      { name: 'Pooja N.', role: 'Data Scientist @ Netflix', text: 'David gave me the exact roadmap I needed to break into industry from academia.' },
      { name: 'James T.', role: 'Analytics Lead', text: 'Outstanding depth of knowledge in Python and ML systems.' },
    ],
    fee: 299,
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
    about: 'Amina Qureshi is a UX Research Director who focuses on the intersection of human psychology and digital product design. She guides the next generation of designers and researchers to build products that deeply resonate with users.',
    achievements: [
      'Led UX at Airbnb and Figma',
      'Published 3 case studies in Nielsen Norman Group',
      'Mentored 100+ designers into product roles',
    ],
    reviews: [
      { name: 'Sara L.', role: 'UX Designer @ Figma', text: "Amina's feedback transformed how I approach user research. A true expert." },
      { name: 'Vikram B.', role: 'Product Designer', text: 'The best design mentor I have ever worked with — no contest.' },
    ],
    fee: 199,
    available: 'Today at 3:00 PM',
    avatar: 'AQ',
    avatarBg: '#EF4444',
  },
];

export default function MentorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mentor = MENTORS.find(m => m.id === parseInt(id)) || MENTORS[0];

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 48 }}>

      {/* Hero Banner */}
      <div style={{ position: 'relative', height: 200, background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(99,102,241,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.3) 0%, transparent 60%)' }} />

        <button
          onClick={() => navigate('/mentors')}
          style={{ position: 'absolute', top: 24, left: 32, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, padding: '8px 16px', color: 'white', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, backdropFilter: 'blur(8px)', zIndex: 10 }}
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Mentor avatar overlapping */}
        <div style={{ position: 'absolute', bottom: -36, left: 40, display: 'flex', alignItems: 'flex-end', gap: 20, zIndex: 10 }}>
          <div style={{
            width: 96, height: 96, borderRadius: 24, background: mentor.avatarBg + '30',
            border: `4px solid white`, display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontSize: 28, fontWeight: 900, color: mentor.avatarBg,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            {mentor.avatar}
          </div>
          <div style={{ paddingBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: 'white', margin: 0, letterSpacing: '-0.02em' }}>{mentor.name}</h1>
              <BadgeCheck size={20} color="#818CF8" />
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', margin: '2px 0 0', fontWeight: 600 }}>{mentor.title}</p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div style={{ padding: '60px 40px 0', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28 }}>

        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Meta Row */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { icon: <Clock size={14} color="#6366F1" />, label: `${mentor.experience} Experience` },
              { icon: <Star size={14} color="#F59E0B" fill="#F59E0B" />, label: `${mentor.rating} (${mentor.sessions}+ Sessions)` },
              { icon: <Users size={14} color="#10B981" />, label: `${mentor.sessions} Students Mentored` },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                {item.icon}
                <span style={{ fontSize: 13, fontWeight: 700, color: '#374151' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Expertise Tags */}
          <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 14px', color: '#111827' }}>Expertise</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {mentor.tags.map(tag => (
                <span key={tag} style={{ fontSize: 13, fontWeight: 700, padding: '6px 16px', borderRadius: 20, background: '#EEF2FF', color: '#6366F1', border: '1px solid #C7D2FE' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* About */}
          <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 12px', color: '#111827' }}>About {mentor.name.split(' ')[1]}</h3>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, margin: 0 }}>{mentor.about}</p>
          </div>

          {/* Achievements */}
          <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 16px', color: '#111827' }}>Notable Achievements</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {mentor.achievements.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: i < mentor.achievements.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} color="#6366F1" />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Reviews */}
          <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 16px', color: '#111827' }}>What Students Say</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {mentor.reviews.map((r, i) => (
                <div key={i} style={{ background: '#F9FAFB', borderRadius: 14, padding: 18, border: '1px solid #F3F4F6' }}>
                  <div style={{ fontSize: 28, color: '#6366F1', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: 10 }}>"</div>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: '0 0 14px', fontStyle: 'italic' }}>{r.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 11, fontWeight: 800, color: '#6366F1' }}>
                      {r.name.slice(0, 2)}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#111827' }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600 }}>{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Card */}
        <div style={{ position: 'sticky', top: 24, height: 'fit-content' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #F3F4F6', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Consultation Fee</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: '#111827', letterSpacing: '-0.03em' }}>₹{mentor.fee}</span>
              <span style={{ fontSize: 14, color: '#9CA3AF', fontWeight: 600 }}>/ 45-min session</span>
            </div>
            <div style={{ height: 1, background: '#F3F4F6', margin: '20px 0' }} />

            {[
              { icon: <Video size={15} color="#6366F1" />, label: '1-on-1 Video Consultation' },
              { icon: <FileText size={15} color="#6366F1" />, label: 'Customized Roadmap PDF' },
              { icon: <Clock size={15} color="#6366F1" />, label: 'Flexible Rescheduling' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                {item.icon}
                <span style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{item.label}</span>
              </div>
            ))}

            <div style={{ height: 1, background: '#F3F4F6', margin: '20px 0' }} />

            <button
              onClick={() => navigate(`/mentors/${mentor.id}/book`)}
              style={{
                width: '100%', padding: '15px', fontSize: 15, fontWeight: 800,
                background: '#6366F1', color: 'white', border: 'none',
                borderRadius: 14, cursor: 'pointer', marginBottom: 10,
                boxShadow: '0 6px 20px rgba(99,102,241,0.35)',
                transition: 'background 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#4F46E5'}
              onMouseOut={e => e.currentTarget.style.background = '#6366F1'}
            >
              Book a Session
            </button>

            <button
              style={{ width: '100%', padding: '14px', fontSize: 14, fontWeight: 700, background: 'white', color: '#374151', border: '1.5px solid #E5E7EB', borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'border-color 0.15s' }}
              onMouseOver={e => e.currentTarget.style.borderColor = '#6366F1'}
              onMouseOut={e => e.currentTarget.style.borderColor = '#E5E7EB'}
            >
              <MessageSquare size={16} /> Send a Message
            </button>

            <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', margin: '16px 0 0', fontWeight: 600 }}>
              Next available: {mentor.available}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
