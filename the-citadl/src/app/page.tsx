import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Comparison />
        <Portfolio />
        <WhyUs />
        <About />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
