import Hero from '@/components/Hero';
import Header from '../components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="p-4">
        <h2 className="text-xl">Welcome to my website!</h2>
      </section>
    </main>
  );
}