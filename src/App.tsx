import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { GallerySection } from './components/GallerySection'
import { StreetArtSection } from './components/StreetArtSection'
import { ExperienceSection } from './components/ExperienceSection'
import { BookingSection } from './components/BookingSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <StreetArtSection />
        <ExperienceSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  )
}
