import { useState } from 'react';
import './AuthPages.css';

export default function LoginPage({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Mock login - in real app, this would call an API
    if (onLogin) {
      onLogin({ email });
    }
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-visual">
          <div className="visual-content">
            <h1 className="visual-title">
              Welcome<br />
              <span className="text-gradient">Back</span>
            </h1>
            <p className="visual-subtitle">
              Continue your transformation journey
            </p>
            <div className="visual-stats">
              <div className="visual-stat">
                <div className="visual-stat-value">10K+</div>
                <div className="visual-stat-label">Active Users</div>
              </div>
              <div className="visual-stat">
                <div className="visual-stat-value">50K+</div>
                <div className="visual-stat-label">Workouts Completed</div>
              </div>
              <div className="visual-stat">
                <div className="visual-stat-value">4.9★</div>
                <div className="visual-stat-label">User Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="auth-form-container">
          <div className="auth-form-content">
            <div className="auth-header">
              <h2>Sign In</h2>
              <p>Enter your credentials to access your account</p>
            </div>
            
            {error && (
              <div className="error-message">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10 6v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              
              <button type="submit" className="btn btn-gradient submit-btn">
                Sign In
              </button>
            </form>
            
            <div className="auth-divider">
              <span>or continue with</span>
            </div>
            
            <div className="social-auth">
              <button className="social-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z"/>
                </svg>
                Facebook
              </button>
              <button className="social-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
                  <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
                  <path d="M5.99 11.98c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V5.28H1.07C.39 6.59 0 8.25 0 10s.39 3.41 1.07 4.72l4.92-2.74z"/>
                  <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.5l4.92 2.62c.8-2.41 3.04-4.24 5.68-4.24z"/>
                </svg>
                Google
              </button>
            </div>
            
            <div className="auth-footer">
              <p>
                Don't have an account?{' '}
                <button className="link-btn" onClick={onSwitchToSignup}>
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignupPage({ onSignup, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    // Mock signup - in real app, this would call an API
    if (onSignup) {
      onSignup({ name: formData.name, email: formData.email });
    }
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-visual">
          <div className="visual-content">
            <h1 className="visual-title">
              Start Your<br />
              <span className="text-gradient">Journey</span>
            </h1>
            <p className="visual-subtitle">
              Join thousands transforming their bodies
            </p>
            <div className="visual-features">
              <div className="feature-item">
                <div className="feature-icon">💪</div>
                <div>
                  <h4>Expert Programs</h4>
                  <p>Science-backed workout plans</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div>
                  <h4>Track Progress</h4>
                  <p>Detailed analytics & insights</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Achieve Goals</h4>
                  <p>Personalized guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="auth-form-container">
          <div className="auth-form-content">
            <div className="auth-header">
              <h2>Create Account</h2>
              <p>Sign up to start your fitness journey</p>
            </div>
            
            {error && (
              <div className="error-message">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10 6v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="input"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              
              <label className="checkbox-label terms-label">
                <input type="checkbox" required />
                <span>I agree to the Terms of Service and Privacy Policy</span>
              </label>
              
              <button type="submit" className="btn btn-gradient submit-btn">
                Create Account
              </button>
            </form>
            
            <div className="auth-divider">
              <span>or continue with</span>
            </div>
            
            <div className="social-auth">
              <button className="social-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z"/>
                </svg>
                Facebook
              </button>
              <button className="social-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
                  <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
                  <path d="M5.99 11.98c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V5.28H1.07C.39 6.59 0 8.25 0 10s.39 3.41 1.07 4.72l4.92-2.74z"/>
                  <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.5l4.92 2.62c.8-2.41 3.04-4.24 5.68-4.24z"/>
                </svg>
                Google
              </button>
            </div>
            
            <div className="auth-footer">
              <p>
                Already have an account?{' '}
                <button className="link-btn" onClick={onSwitchToLogin}>
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}