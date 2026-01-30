import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
