import React from 'react';
import './about.css';
import { ImLocation } from 'react-icons/im';
import { FaUserGraduate } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ME from '../../assets/coding.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <ImLocation className="about__icon" />
              <h5>Location</h5>
              <small>Corinth, Texas</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bachelor of Science, Information Technology and Systems
              </small>
            </article>
            <article className="about__card">
              <MdEmail className="about__icon" />
              <h5>Email</h5>
              <small>achapa@adrianchapa.dev</small>
            </article>
          </div>
          <p>
            I am a software engineer who is always up for learning new things
            and constantly exploring new areas of work. I am also able to
            leverage my existing skills and expertise to solve challenging
            problems.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
