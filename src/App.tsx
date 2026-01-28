import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ModernNavbar from './components/ModernNavbar';
import MuscleMap from './components/MuscleMap';
import Exercises from './pages/Exercises';
import WorkoutGuidePage from './components/WorkoutGuidePage';
import HistoryPage from './components/HistoryPage';
import Home2 from './components/Home2';
import LoginPage, { SignupPage } from './components/Login';
import { EtherealShadow } from './components/ui/etheral-shadow';
import PageTransition from './components/ui/PageTransition';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const location = useLocation();

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleSignup = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <EtherealShadow>
      <ModernNavbar
        user={user}
        onLogout={handleLogout}
      />

      <div className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <MuscleMap />
              </PageTransition>
            } />
            <Route path="/home2" element={
              <PageTransition>
                <Home2 />
              </PageTransition>
            } />
            <Route path="/exercises/:muscle" element={
              <PageTransition>
                <Exercises />
              </PageTransition>
            } />
            <Route path="/workouts" element={
              <PageTransition>
                <WorkoutGuidePage />
              </PageTransition>
            } />
            <Route path="/history" element={
              <PageTransition>
                <HistoryPage />
              </PageTransition>
            } />
            <Route path="/login" element={
              <PageTransition>
                {isSignup ? (
                  <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setIsSignup(false)} />
                ) : (
                  <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setIsSignup(true)} />
                )}
              </PageTransition>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </EtherealShadow>
  );
}

export default App;