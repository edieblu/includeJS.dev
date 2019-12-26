import React from 'react';
import Layout from '../components/layout';
import './contact.css';

export default () => (
  <Layout>
    <div className="contact-container">
      <div className="contact-title">
        <h2>Contact us</h2>
      </div>

      <form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" className='contact-form-input'/>
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message"
            className='contact-form-textarea'
          />
        </div>
        <input type="submit" value="Send message" />
      </form>
    </div>
  </Layout>
);
