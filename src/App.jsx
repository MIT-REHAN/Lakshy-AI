import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Loading from './pages/Loading';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Colleges from './pages/Colleges';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import MentorListing from './pages/MentorListing';
import MentorProfile from './pages/MentorProfile';
import MentorBooking from './pages/MentorBooking';
import MentorSessions from './pages/MentorSessions';
import Layout from './components/Layout';

function App() {
  return (
    <UserProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/roadmap" element={<Layout><Roadmap /></Layout>} />
          <Route path="/colleges" element={<Layout><Colleges /></Layout>} />
          <Route path="/chat" element={<Layout><Chat /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          {/* ── Booking Mentor Section ── */}
          <Route path="/mentors" element={<Layout><MentorListing /></Layout>} />
          <Route path="/mentors/:id" element={<Layout><MentorProfile /></Layout>} />
          <Route path="/mentors/:id/book" element={<Layout><MentorBooking /></Layout>} />
          <Route path="/mentor-sessions" element={<Layout><MentorSessions /></Layout>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
