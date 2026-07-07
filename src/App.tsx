import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Testimonials />
        <TrustStats />
        <Services />
        <About />
        <Process />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
