import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/ecommerce.png';
import IMG2 from '../../assets/todo.jpeg';
import IMG3 from '../../assets/fitness.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      'This is a Ecommerce website using HTML CSS AND JAVASCRIPT, This was build Inorder to learn about css responsive design and animations ,also included some javascript. ',
    github: 'https://github.com/santu8ak/e-commerce',
    demo: '  https://e-commerce-omega-ecru.vercel.app/',
  },
  {
    id: 1,
    image: IMG3,
    title:
      'This is a Gym website made using React.js ,This website was made for my local Gym.,This was build Inorder to learn about css responsive design and animations ,also included some javascript.',
    github: 'https://github.com/santu8ak/Fitness-web',
    demo: 'https://fitness-website-omega.vercel.app/',
  },
  {
    id: 1,
    image: IMG2,
    title:
      'This is a todolist app made with HTML CSS AND JAVASCRIPT.in order to learn javascript',
    github: 'https://github.com/santu8ak/T0-DO-LIST',
    demo: 'https://to-do-list-delta-eight.vercel.app/',
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
              <div
                className="portfolio__item-image"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  live Demo
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