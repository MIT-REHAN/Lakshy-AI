import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, User, Mail, MapPin } from 'lucide-react';

// ── Calendar helper ───────────────────────────────────────────────────────────
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay(); // 0=Sun
}
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['SU','MO','TU','WE','TH','FR','SA'];
const TIME_SLOTS = ['09:00 AM','10:30 AM','01:00 PM','02:30 PM','04:00 PM','05:30 PM'];

const EDU_LEVELS = ['School Student','Undergraduate','Postgraduate','PhD Candidate'];
const COMMON_TOPICS = ['Career Roadmap','Interview Prep','Resume Review','Research Guidance','Startup Ideas','Skill Planning'];

export default function MentorBooking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 0=Calendar, 1=Info, 2=Confirm
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [eduLevel, setEduLevel] = useState('Undergraduate');
  const [form, setForm] = useState({ name: '', email: '', doubts: '', topics: [] });
  const [booked, setBooked] = useState(false);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };

  const toggleTopic = (t) => setForm(f => ({
    ...f,
    topics: f.topics.includes(t) ? f.topics.filter(x => x !== t) : [...f.topics, t],
  }));

  const step1Valid = selectedDate && selectedTime;
  const step2Valid = form.name.trim() && form.email.trim();

  const progress = [33, 66, 100][step];

  if (booked) {
    return (
      <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F9FAFB', padding: 40 }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}
          style={{ background: 'white', borderRadius: 28, padding: '52px 44px', maxWidth: 480, width: '100%', textAlign: 'center', boxShadow: '0 16px 64px rgba(99,102,241,0.12)', border: '1.5px solid #F3F4F6' }}
        >
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: 2, duration: 0.5 }}
            style={{ width: 80, height: 80, borderRadius: '50%', background: '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px' }}
          >
            <CheckCircle2 size={40} color="#6366F1" />
          </motion.div>

          <h2 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 8px', color: '#111827' }}>Your session is booked!</h2>
          <p style={{ fontSize: 14, color: '#6B7280', margin: '0 0 32px' }}>Get ready to accelerate your career journey with AI-driven insights.</p>

          <div style={{ background: '#F9FAFB', borderRadius: 16, padding: 24, marginBottom: 24, border: '1px solid #F3F4F6', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#6366F1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16, fontWeight: 800, color: 'white' }}>AT</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Expert Mentor</div>
                <div style={{ fontSize: 17, fontWeight: 900, color: '#111827' }}>Dr. Aris Thorne</div>
              </div>
            </div>
            <div style={{ height: 1, background: '#E5E7EB', marginBottom: 20 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '📅', label: 'Date', value: selectedDate ? `${MONTHS[calMonth].slice(0, 3)} ${selectedDate}, ${calYear}` : 'Selected Date' },
                { icon: '🕙', label: 'Time', value: selectedTime || 'Selected Time' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', marginBottom: 4 }}>{item.icon} {item.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#111827' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => navigate('/mentor-sessions')}
            style={{ width: '100%', padding: '15px', fontSize: 14, fontWeight: 800, background: '#6366F1', color: 'white', border: 'none', borderRadius: 14, cursor: 'pointer', marginBottom: 10, boxShadow: '0 6px 20px rgba(99,102,241,0.3)' }}
          >
            📅 Add to Calendar
          </button>
          <button onClick={() => navigate('/mentor-sessions')}
            style={{ width: '100%', padding: '14px', fontSize: 14, fontWeight: 700, background: 'white', color: '#374151', border: '1.5px solid #E5E7EB', borderRadius: 14, cursor: 'pointer' }}
          >
            Go to Dashboard
          </button>
          <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 16 }}>A confirmation email with the meeting link has been sent to your inbox.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%', background: '#F9FAFB', paddingBottom: 48 }}>

      {/* Top bar */}
      <div style={{ padding: '20px 40px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #E5E7EB', background: 'white' }}>
        <button onClick={() => step === 0 ? navigate(`/mentors/${id}`) : setStep(s => s - 1)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: '#374151', fontWeight: 700, fontSize: 14 }}
        >
          <ArrowLeft size={18} />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#111827' }}>Schedule Session</div>
          <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>Step {step + 1} of 3</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#6366F1' }}>{progress}%</div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: '#E5E7EB' }}>
        <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #6366F1, #8B5CF6)', borderRadius: 2 }}
        />
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px' }}>
        <AnimatePresence mode="wait">

          {/* ── STEP 0: Calendar ────────────────────────────────────────────── */}
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>

              {/* Calendar Card */}
              <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{MONTHS[calMonth]} {calYear}</h3>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[
                      { icon: <ChevronLeft size={16} />, action: prevMonth },
                      { icon: <ChevronRight size={16} />, action: nextMonth },
                    ].map((btn, i) => (
                      <button key={i} onClick={btn.action}
                        style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#374151' }}
                      >{btn.icon}</button>
                    ))}
                  </div>
                </div>

                {/* Day headers */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
                  {DAYS.map(d => (
                    <div key={d} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#9CA3AF', padding: '4px 0' }}>{d}</div>
                  ))}
                </div>

                {/* Date grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                    const isPast = (calYear === today.getFullYear() && calMonth === today.getMonth() && day < today.getDate());
                    const isSelected = selectedDate === day && calYear === today.getFullYear() && calMonth === calMonth;
                    return (
                      <button key={day} disabled={isPast} onClick={() => setSelectedDate(day)}
                        style={{
                          height: 40, borderRadius: 10, border: isSelected ? '2px solid #6366F1' : '1.5px solid transparent',
                          background: isSelected ? '#6366F1' : 'transparent',
                          color: isSelected ? 'white' : isPast ? '#D1D5DB' : '#111827',
                          fontWeight: isSelected ? 800 : 600, fontSize: 14,
                          cursor: isPast ? 'not-allowed' : 'pointer',
                          transition: 'all 0.15s',
                        }}
                        onMouseOver={e => { if (!isPast && !isSelected) e.currentTarget.style.background = '#EEF2FF'; }}
                        onMouseOut={e => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 24 }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 16px' }}>Available Time Slots</h3>
                  <p style={{ fontSize: 12, color: '#9CA3AF', margin: '0 0 16px', fontWeight: 600 }}>Times shown in your local timezone (GMT+5:30)</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                    {TIME_SLOTS.map(slot => (
                      <button key={slot} onClick={() => setSelectedTime(slot)}
                        style={{
                          padding: '20px 8px', borderRadius: 14, border: selectedTime === slot ? '2px solid #6366F1' : '1.5px solid #E5E7EB',
                          background: selectedTime === slot ? '#EEF2FF' : 'white',
                          color: selectedTime === slot ? '#6366F1' : '#374151',
                          fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.15s',
                        }}
                      >{slot}</button>
                    ))}
                  </div>
                </motion.div>
              )}

              <button disabled={!step1Valid} onClick={() => setStep(1)}
                style={{
                  width: '100%', padding: '15px', fontSize: 15, fontWeight: 800,
                  background: step1Valid ? '#6366F1' : '#E5E7EB', color: step1Valid ? 'white' : '#9CA3AF',
                  border: 'none', borderRadius: 14, cursor: step1Valid ? 'pointer' : 'not-allowed',
                  boxShadow: step1Valid ? '0 6px 20px rgba(99,102,241,0.3)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                Continue →
              </button>

              {selectedDate && selectedTime && (
                <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, fontWeight: 700, color: '#6366F1' }}>
                  {MONTHS[calMonth].slice(0, 3)} {selectedDate}, {calYear} • {selectedTime}
                </div>
              )}
            </motion.div>
          )}

          {/* ── STEP 1: Info & Doubts ───────────────────────────────────────── */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>

              <h2 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 4px', color: '#111827' }}>Information & Doubts</h2>
              <p style={{ fontSize: 14, color: '#9CA3AF', margin: '0 0 28px', fontWeight: 600 }}>Step 2 of 3: Help your mentor understand your goals</p>

              {/* Personal Details */}
              <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 16 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 20px', color: '#111827' }}>Personal Details</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                  {[
                    { label: 'Full Name', placeholder: 'Enter your name', key: 'name', icon: <User size={15} color="#9CA3AF" /> },
                    { label: 'Email Address', placeholder: 'you@example.com', key: 'email', icon: <Mail size={15} color="#9CA3AF" /> },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ fontSize: 13, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 8 }}>{field.label}</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1.5px solid #E5E7EB', borderRadius: 12, padding: '10px 14px', background: '#FAFAFA' }}>
                        {field.icon}
                        <input type="text" placeholder={field.placeholder}
                          value={form[field.key]}
                          onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                          style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#111827' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <label style={{ fontSize: 13, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 10 }}>Current Education Level</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {EDU_LEVELS.map(level => (
                    <button key={level} onClick={() => setEduLevel(level)}
                      style={{
                        padding: '9px 16px', fontSize: 13, fontWeight: 700, borderRadius: 32,
                        background: eduLevel === level ? '#6366F1' : 'white',
                        color: eduLevel === level ? 'white' : '#374151',
                        border: eduLevel === level ? '2px solid #6366F1' : '1.5px solid #E5E7EB',
                        cursor: 'pointer', transition: 'all 0.15s',
                      }}
                    >{level}</button>
                  ))}
                </div>
              </div>

              {/* Doubts */}
              <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: '#EEF2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16 }}>🎯</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#111827' }}>What do you want help with?</div>
                    <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>This helps the mentor prepare for your session</div>
                  </div>
                </div>
                <textarea
                  placeholder="Describe your doubts, goals, or questions in detail..."
                  value={form.doubts}
                  onChange={e => setForm(f => ({ ...f, doubts: e.target.value }))}
                  style={{ width: '100%', minHeight: 120, border: '1.5px solid #E5E7EB', borderRadius: 12, padding: 14, fontSize: 14, color: '#111827', resize: 'vertical', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', background: '#FAFAFA' }}
                />

                <div style={{ marginTop: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#9CA3AF', marginBottom: 10 }}>Common Topics</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {COMMON_TOPICS.map(t => (
                      <button key={t} onClick={() => toggleTopic(t)}
                        style={{
                          padding: '7px 14px', fontSize: 12, fontWeight: 700, borderRadius: 20,
                          background: form.topics.includes(t) ? '#EEF2FF' : 'white',
                          color: form.topics.includes(t) ? '#6366F1' : '#374151',
                          border: form.topics.includes(t) ? '1.5px solid #C7D2FE' : '1.5px solid #E5E7EB',
                          cursor: 'pointer', transition: 'all 0.15s',
                        }}
                      >{t}</button>
                    ))}
                  </div>
                </div>
              </div>

              <button disabled={!step2Valid} onClick={() => setStep(2)}
                style={{
                  width: '100%', padding: '15px', fontSize: 15, fontWeight: 800,
                  background: step2Valid ? '#6366F1' : '#E5E7EB', color: step2Valid ? 'white' : '#9CA3AF',
                  border: 'none', borderRadius: 14, cursor: step2Valid ? 'pointer' : 'not-allowed',
                  boxShadow: step2Valid ? '0 6px 20px rgba(99,102,241,0.3)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                Continue to Confirmation →
              </button>
            </motion.div>
          )}

          {/* ── STEP 2: Confirmation ────────────────────────────────────────── */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>

              <h2 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 4px', color: '#111827' }}>Confirm Your Booking</h2>
              <p style={{ fontSize: 14, color: '#9CA3AF', margin: '0 0 28px', fontWeight: 600 }}>Step 3 of 3: Review and confirm your session</p>

              <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #F3F4F6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 16 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 20px', color: '#111827' }}>Session Details</h3>

                {[
                  { label: 'Mentor', value: 'Dr. Aris Thorne' },
                  { label: 'Date', value: `${MONTHS[calMonth].slice(0, 3)} ${selectedDate}, ${calYear}` },
                  { label: 'Time', value: selectedTime },
                  { label: 'Duration', value: '45 minutes' },
                  { label: 'Your Name', value: form.name || '—' },
                  { label: 'Email', value: form.email || '—' },
                  { label: 'Education Level', value: eduLevel },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #F9FAFB' }}>
                    <span style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 700 }}>{item.label}</span>
                    <span style={{ fontSize: 13, color: '#111827', fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0 0', marginTop: 8 }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: '#111827' }}>Total</span>
                  <span style={{ fontSize: 20, fontWeight: 900, color: '#6366F1' }}>₹349</span>
                </div>
              </div>

              <div style={{ background: '#EEF2FF', borderRadius: 14, padding: '14px 18px', marginBottom: 20, fontSize: 13, color: '#6366F1', fontWeight: 600, lineHeight: 1.5 }}>
                ✅ Your session details will be sent to <strong>{form.email || 'your email'}</strong> upon confirmation.
              </div>

              <button onClick={() => setBooked(true)}
                style={{
                  width: '100%', padding: '16px', fontSize: 16, fontWeight: 900,
                  background: '#6366F1', color: 'white', border: 'none',
                  borderRadius: 14, cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
                }}
              >
                Confirm & Pay ₹349
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom sticky session info (steps 1 & 2) */}
      {step > 0 && selectedDate && selectedTime && (
        <div style={{ position: 'fixed', bottom: 0, left: 240, right: 0, background: 'white', borderTop: '1px solid #E5E7EB', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 50 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#111827' }}>Session with Dr. Aris Thorne</div>
            <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 600 }}>
              {MONTHS[calMonth].slice(0, 3)} {selectedDate} • {selectedTime}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
