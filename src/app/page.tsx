import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/home/HeroSection'
import QuickLinks from '@/components/home/QuickLinks'
import NewsEvents from '@/components/home/NewsEvents'
import Footer from '@/components/layout/Footer'
import FloatingChat from '@/components/floating-chat'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center gap-8 p-4">
        {/* Hero + Sections */}
        <HeroSection />
        <QuickLinks />
        <NewsEvents />
        <FloatingChat />
        {/* Logo Section */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
