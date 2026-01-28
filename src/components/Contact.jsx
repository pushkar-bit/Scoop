import { useState } from 'react'
import '../styles/Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any questions or support</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Visit Us</h3>
            <p>123 Fitness Street</p>
            <p>Gym City, GC 12345</p>
          </div>
          <div className="info-item">
            <h3>Call Us</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Fax: (123) 456-7891</p>
          </div>
          <div className="info-item">
            <h3>Email Us</h3>
            <p>info@fitlife.com</p>
            <p>support@fitlife.com</p>
          </div>
          <div className="info-item">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  )
}
export default Contact