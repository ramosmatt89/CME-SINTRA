import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Ministries from '@/components/Ministries';
import Gallery from '@/components/Gallery';
import FirstVisit from '@/components/FirstVisit';
import Donations from '@/components/Donations';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Ministries />
      <Gallery />
      <FirstVisit />
      <Donations />
      <Contacts />
      <Footer />
    </main>
  );
}
