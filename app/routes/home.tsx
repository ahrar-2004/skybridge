import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
