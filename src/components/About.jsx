import '../styles/About.css'
const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Scoop</h1>
        <p>Your trusted partner in fitness and wellness since 2020</p>
      </div>
      <div className="about-content">
        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>To make fitness accessible and enjoyable for everyone by providing expert-guided workout tutorials and personalized training experiences.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To become the world's leading digital fitness platform, helping millions achieve their health and fitness goals through innovative technology and expert guidance.</p>
          </div>
        </section>
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="John Smith" />
              <h3>Kshitiz </h3>
              <p className="role">Founder & Head Trainer</p>
              <p>With over 15 years of experience in fitness training and nutrition.</p>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg" alt="Sarah Johnson" />
              <h3>Parrv Luthra</h3>
              <p className="role">Nutrition Specialist</p>
              <p>Certified nutritionist helping clients achieve their fitness goals through proper diet.</p>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg" alt="Mike Williams" />
              <h3>Pushkar Jain</h3>
              <p className="role">Strength Coach</p>
              <p>Specializing in strength training and muscle building programs.</p>
            </div>
          </div>
        </section>
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Constantly improving our platform with cutting-edge features.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Building a supportive community of fitness enthusiasts.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default About