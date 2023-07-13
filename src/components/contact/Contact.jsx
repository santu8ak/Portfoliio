import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import{MdOutlineEmail} from 'react-icons/md';
import{BsWhatsapp} from 'react-icons/bs';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rn2fbvf",
        "template_s8ooyme",
        form.current,
        "Xg_ury3HuE6fnlG8a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>santugm2905@gmail.com</h5>
            <a
              href="mailto:santugm2905@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a message{""}
            </a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+918951913459</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9677404234"
              target="_blank"
              rel="noreferrer"
            >
              send a message{' '}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Emial" required />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
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