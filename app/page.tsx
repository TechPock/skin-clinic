import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import JoinSection from "./components/JoinSection";
import FreeConsultation from "./components/FreeConsultation";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <WhyChooseUs />
        <Treatments />
        <FreeConsultation />
        <Testimonials />
        <JoinSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
