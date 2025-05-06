import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Body,<br />One Exercise at a Time</h1>
        <p className="hero-subtitle">
          Follow expert-created workout tutorials for every muscle group. 
          Find the perfect routine to achieve your fitness goals.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://i.pinimg.com/736x/e2/3a/c1/e23ac1de79696cfb9489e92681fe4afc.jpg" 
          alt="Person working out" 
        />
      </div>
    </div>
  )
}

export default Hero