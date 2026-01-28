import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import MuscleMap from './components/MuscleMap';
import Exercises from './pages/Exercises';
import WorkoutGuidePage from './components/WorkoutGuidePage';
import HistoryPage from './components/HistoryPage';
import LoginPage, { SignupPage } from './components/Login';
import { EtherealShadow } from './components/ui/etheral-shadow';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

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
    <BrowserRouter>
      <EtherealShadow>
        <ModernNavbar
          user={user}
          onLogout={handleLogout}
        />

        <div className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<MuscleMap />} />
            <Route path="/exercises/:muscle" element={<Exercises />} />
            <Route path="/workouts" element={<WorkoutGuidePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/login" element={
              isSignup ? (
                <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setIsSignup(false)} />
              ) : (
                <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setIsSignup(true)} />
              )
            } />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </EtherealShadow>
    </BrowserRouter>
  );
}

export default App;