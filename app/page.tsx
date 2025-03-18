import Hero from '@/components/Hero';
import Header from '../components/Header';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className='bg-[#F9FAFB]'>
      <Header />
      <Hero />
      <MainContent />
    </main>
  );
}