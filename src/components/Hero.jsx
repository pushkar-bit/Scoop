import '../styles/Hero.css'

const Hero = ({ setCurrentPage }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Body,<br />One Exercise at a Time</h1>
        <p className="hero-subtitle">
          Follow expert-created workout tutorials for every muscle group. 
          Find the perfect routine to achieve your fitness goals.
        </p>
        <div className="hero-buttons">
          <button className="primary-button" onClick={() => setCurrentPage('login')}>Get Started</button>
          <button className="secondary-button" onClick={() => setCurrentPage('about')}>Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="pushkar.JPG" 
          alt="Person working out" 
        />
      </div>
    </div>
  )
}

export default Hero