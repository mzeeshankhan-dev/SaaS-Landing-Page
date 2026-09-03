import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBand from './components/TrustBand'
import ProblemSolution from './components/ProblemSolution'
import ProductShowcase from './components/ProductShowcase'
import Scanner from './components/Scanner'
import FeaturesBento from './components/FeaturesBento'
import Recommendations from './components/Recommendations'
import Analytics from './components/Analytics'
import HowItWorks from './components/HowItWorks'
import BeforeAfter from './components/BeforeAfter'
import Integrations from './components/Integrations'
import UseCases from './components/UseCases'
import Security from './components/Security'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-void-950 bg-noise text-mist-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <ProblemSolution />
        <ProductShowcase />
        <Scanner />
        <FeaturesBento />
        <Recommendations />
        <Analytics />
        <HowItWorks />
        <BeforeAfter />
        <Integrations />
        <UseCases />
        <Security />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
