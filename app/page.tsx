import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Trusted from "@/components/Trusted";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
//import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Trusted />
      <WhoWeWorkWith />
      <About />
      <Services />
      <WhyChoose/>
      <Process/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}