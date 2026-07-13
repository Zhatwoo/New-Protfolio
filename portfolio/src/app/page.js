import Hero from './Homepage/Components/Hero';
import TechStack from './Homepage/Components/Techstack';
import FeaturedProjects from './Homepage/Components/FeaturedProjects';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </main>
  );
}
