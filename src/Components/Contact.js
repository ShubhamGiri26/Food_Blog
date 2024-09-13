import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_jo28km5', 'template_uknpyxi', formData, 'XJN1B4lDUlHEd0TS8')
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <>
      <header className='contact-header'>
        <h1>Contact Us</h1>
      </header>

      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Hi! I’m Shubham, a college student with a passion for food and cooking. If you have any questions, suggestions, or just want to chat about food, feel free to reach out to me.</p>

        <h3>Email</h3>
        <p>You can email me at <a href="mailto:shubhamgiri068@gmail.com">shubhamgiri262002@gmail.com</a>.</p>

        <h3>Social Media</h3>
        <p>Follow me on social media:</p>
        <ul className="social-media">
          <li><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          <li><a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>

        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className='contact-footer'>
        <p>&copy; All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
