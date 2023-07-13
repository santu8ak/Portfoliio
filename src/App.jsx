import { useEffect } from "react";
import NavBar from "./components/nav/Navbar";
import Header from"./components/header/Header";
import Footer from "./components/footer/footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience"
import Aos from 'aos';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
       <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
