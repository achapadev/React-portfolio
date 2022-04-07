import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-1.png';
import IMG2 from '../../assets/portfolio-2.png';
import IMG3 from '../../assets/portfolio-3.png';
import IMG4 from '../../assets/portfolio-4.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sports Odds Collection',
    github: 'https://github.com/achapadev/sports-odds-collection',
    demo: 'https://sports-odd-collections.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Github Finder',
    github: 'https://github.com/achapadev/Github-Finder',
    demo: 'https://github-finder-czs9z4s4s-achapadev.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'House Marketplace',
    github: 'https://github.com/achapadev/House-Marketplace',
    demo: 'https://house-market-place.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Support Desk',
    github: 'https://github.com/achapadev/SupportDesk',
    demo: 'https://itsupportdesk.herokuapp.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
