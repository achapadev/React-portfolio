import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zdvszsk',
      'template_88xyf53',
      form.current,
      'TZomfHpw1L3CF63nY'
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email:</h4>
            <h5>achapa@adrianchapa.dev</h5>
            <a href="mailto:achapa@adrianchapa.dev" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiGmail className="contact__option-icon" />
            <h4>Gmail:</h4>
            <h5>achapa@adrianchapa.dev</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=achapa@adrianchapa.dev&su=&cc=&bcc=&body"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdPhoneIphone className="contact__option-icon" />
            <h4>Call:</h4>
            <h5>469-449-8515</h5>
            <a href="tel:469-449-8515" target="_blank">
              Call Now
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
