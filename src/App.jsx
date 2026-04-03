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
import Layout from './components/Layout';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/roadmap" element={<Layout><Roadmap /></Layout>} />
          <Route path="/colleges" element={<Layout><Colleges /></Layout>} />
          <Route path="/chat" element={<Layout><Chat /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
