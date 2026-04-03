import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Compass, GraduationCap, MessageSquare, LayoutDashboard, Settings, BrainCircuit, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const { userData } = useUser();
  const navigate = useNavigate();
  const userName = userData?.name || 'John Doe';
  const role = userData?.role || 'Student';
  const [showLogout, setShowLogout] = useState(false);

  const items = [
    { id: '1', label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { id: '2', label: 'AI Roadmap', icon: Compass, to: '/roadmap' },
    { id: '3', label: 'Colleges', icon: GraduationCap, to: '/colleges' },
    { id: '4', label: 'AI Mentor', icon: MessageSquare, to: '/chat' },
    { id: '5', label: 'Settings', icon: Settings, to: '/profile' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('lakshyai_user');
    window.location.href = '/';
  };

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div style={{ padding: '32px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BrainCircuit color="#fff" size={24} />
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>LakshyAI</h1>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map(item => (
          <NavLink 
            key={item.id} 
            to={item.to}
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} className="icon" />
            <span style={{ fontWeight: 600 }}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Premium CTA */}
      <div style={{ padding: '0 16px', marginBottom: 24 }}>
        <div style={{ padding: 20, background: '#F8FAFC', borderRadius: 16, border: '1px solid var(--divider)', display: 'flex', flexDirection: 'column', gap: 12 }}>
           <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                 <div style={{ width: 6, height: 6, background: 'var(--text-primary)', borderRadius: '50%' }} />
                 <div style={{ width: 6, height: 6, background: 'var(--text-primary)', borderRadius: '50%' }} />
              </div>
              <span style={{ fontWeight: 800, fontSize: 14 }}>Go Premium</span>
           </div>
           <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>Unlock advanced AI pathfinding and 1-on-1 mentoring.</span>
           <button className="btn btn-primary" style={{ padding: '8px', fontSize: 13, width: '100%', borderRadius: 8 }}>Upgrade Now</button>
        </div>
      </div>

      {/* User Profile Footer */}
      <div style={{ position: 'relative' }}>
        <AnimatePresence>
          {showLogout && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
              style={{ position: 'absolute', bottom: '80px', left: '24px', right: '24px', background: 'var(--surface)', borderRadius: 12, padding: 8, boxShadow: 'var(--shadow-lg)', border: '1px solid var(--divider)', zIndex: 100 }}
            >
              <button onClick={handleLogout} className="btn" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', color: 'var(--error)', background: '#FEF2F2', padding: '12px 16px', borderRadius: 8, fontWeight: 700 }}>
                 <LogOut size={18} style={{ marginRight: 8 }} /> Log out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div 
          onClick={() => setShowLogout(!showLogout)}
          style={{ padding: '24px', borderTop: '1px solid var(--divider)', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', background: showLogout ? '#F9FAFB' : 'transparent', transition: 'background 0.2s' }}
        >
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: 700 }}>
            {userName.slice(0, 2).toUpperCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{userName}</span>
            <span style={{ fontSize: 12, color: 'var(--hint)', fontWeight: 600 }}>{role}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
