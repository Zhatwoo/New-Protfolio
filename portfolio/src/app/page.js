import Hero from './Homepage/Components/Hero';
import TechStack from './Homepage/Components/Techstack';
import FeaturedProjects from './Homepage/Components/FeaturedProjects';

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </main>
  );
}
