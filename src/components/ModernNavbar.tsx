import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './ModernNavbar.css';

interface ModernNavbarProps {
  user: any;
  onLogout: () => void;
  // Kept for backward compatibility but using routing now
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export default function ModernNavbar({ user, onLogout }: ModernNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'workouts', label: 'WORKOUT GUIDES', path: '/workouts' },
    { id: 'history', label: 'HISTORY', path: '/history' },
  ];

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-logo-link">
            <div className="brand-logo">
              <div className="logo-icon">S</div>
              <span className="brand-name">Scoop</span>
            </div>
          </Link>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
          {!user ? (
            <Link to="/login" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-label">SIGN IN</span>
            </Link>
          ) : (
            <button className="nav-item" onClick={onLogout}>
              <span className="nav-label">LOGOUT</span>
            </button>
          )}
        </div>

        <div className="navbar-actions">
          <button className="btn btn-secondary about-btn">ABOUT US</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
