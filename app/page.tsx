import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services/Services";
import CTA from "@/components/CTA";
import TechnologySection from "@/components/Technology/TechnologySection";
import Testimonials from "@/components/Testimonials";
import OurWorkProcess from "@/components/OurWorkProcess";
import OurWork from "@/components/OurWork";
import FAQ from "@/components/FAQ";



 export default function Home() {
  return (
    <>
     <Hero />
    < Services />
     <TechnologySection />
     <OurWorkProcess />
     <WhyChooseUs />
     <Testimonials/>
     <OurWork/>
    <FAQ />
     < CTA />
    </>
  );
}


