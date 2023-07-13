import React from 'react';
import './header.css';
import 'boxicons';
import { Typewriter } from 'react-simple-typewriter';
import person from"../../assets/pic.jpeg";
import CV from "../../assets/santoshcv.pdf"

const Header = () => {
  return (
    <header id="home">
      <div className="home-content">
        <h3>Hello,Its me.</h3>
        <h1>Santosh.</h1>
        <h3>
          And I'm a{' '}
          <span style={{ color: '#0ef', fontWeight: 'bold' }}>
      
            <Typewriter
              words={[
                'FullStack Developer.',
                'React.js Developer',
                'Blogger.',
                'FullStack Developer.',
                'React.js Developer',
                'Blogger.',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <p>
          Hi ,I am a web Developer. My
          interests are in Front End and Back End Development,I love to create
          beautiful and functioning products with delightful user experience.
        </p>
        <div class="social-media">
          <a
            href="https://github.com/santu8ak"
            style={{ '--i': 1 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/santosh-s-817b36279/"
            style={{ '--i': 4 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://twitter.com/santosh_c_"
            style={{ '--i': 3 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>

        
        </div>
        <a href={CV} class="download-btn" download>
          Download CV
        </a>
        <a href="#contact" class="download-btn move__contact">
          Talk?
        </a>
  
      </div>

      <div class="home-img">
        <img src={person} alt="" />
      </div>
    </header>
  );
};

export default Header;