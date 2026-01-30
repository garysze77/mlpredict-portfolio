import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Testimonials />
    </main>
  );
}
