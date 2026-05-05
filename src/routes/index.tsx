import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Videos } from "@/components/site/Videos";
import { Gallery } from "@/components/site/Gallery";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { Instagram } from "@/components/site/Instagram";
import { Booking } from "@/components/site/Booking";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Videos />
        <Gallery />
        <WhyChoose />
        <Testimonials />
        <Instagram />
        <Booking />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
