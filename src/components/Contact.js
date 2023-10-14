import React from 'react';

function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
        </div>
        <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="form-group">
            <input type="text" id="name" name="name" required />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <div className="form-group">
            <button type="submit" className="form-control-submit-button">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
