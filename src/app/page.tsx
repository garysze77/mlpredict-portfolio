import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Projects />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
