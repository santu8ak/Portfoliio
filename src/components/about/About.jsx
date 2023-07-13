import React from "react";
import "./about.css";
import person from"../../assets/pic.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={person} alt="me_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h5>Full stack Developer</h5>
            </article>
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h5>Passionate about Building products</h5>
            </article>

            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h5>My projects are listed below!</h5>
            </article>
          </div>
          <p>
            Hi ,I am a web Developer.
            My interests are in Front End and Back End Development,I love to
            create beautiful and functioning products with delightful user
            experience.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
