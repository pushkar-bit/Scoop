import { useState } from 'react'
import '../styles/Navbar.css'
const Navbar = ({ searchQuery, setSearchQuery, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleNavClick = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-text">Sc<span className="logo-highlight">oop</span></span>
        </div>
        {currentPage === 'home' && (
          <form className="search-container" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search exercises..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-button" type="submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
              </svg>
            </button>
          </form>
        )}
        <div className="nav-links desktop-only">
          <a
            href="#"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Exercises
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
          <button className="login-button" onClick={() => handleNavClick('login')}>Login</button>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a
            href="#"
            className={`mobile-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Exercises
          </a>
          <a
            href="#"
            className={`mobile-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </a>
          <a
            href="#"
            className={`mobile-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
          <button className="mobile-login-button" onClick={() => handleNavClick('login')}>Login</button>
        </div>
      )}
    </nav>
  )
}
export default Navbar