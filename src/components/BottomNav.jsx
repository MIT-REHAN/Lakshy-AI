import { NavLink } from 'react-router-dom';
import { Home, Compass, GraduationCap, MessageSquare, User } from 'lucide-react';

export default function BottomNav() {
  const items = [
    { id: '1', label: 'Home', icon: Home, to: '/dashboard' },
    { id: '2', label: 'Roadmap', icon: Compass, to: '/roadmap' },
    { id: '3', label: 'Colleges', icon: GraduationCap, to: '/colleges' },
    { id: '4', label: 'Chat', icon: MessageSquare, to: '/chat' },
    { id: '5', label: 'Profile', icon: User, to: '/profile' },
  ];

  return (
    <nav className="bottom-nav glass">
      {items.map(item => (
        <NavLink 
          key={item.id} 
          to={item.to}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <MotionIconWrapper isActive={isActive}>
                 <item.icon className="nav-icon" color={isActive ? "var(--primary)" : "var(--hint)"} />
              </MotionIconWrapper>
              <span style={{ transition: 'color 0.3s' }}>{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

// A simple local wrapper to animate icon on tab change
function MotionIconWrapper({ isActive, children }) {
  return (
    <div style={{ transform: isActive ? 'translateY(-2px)' : 'none', transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
      {children}
    </div>
  );
}
