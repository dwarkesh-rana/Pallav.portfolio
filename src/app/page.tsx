import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Expertise from '@/components/sections/Expertise'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      {/* Global Client Shell navigation */}
      <Navbar />

      {/* Main long-form section containers */}
      <main className="flex-1">
        {/* Section 0: Hero Cover details */}
        <Hero />

        {/* Section 1: Academic Credentials credentials */}
        <About />

        {/* Section 2: Work Engagement chronicles */}
        <Experience />

        {/* Section 3: Technical Skills Matrix */}
        <Skills />

        {/* Section 4: Process Workflows specializations */}
        <Expertise />

        {/* Section 5: Direct Outreach gateways */}
        <Contact />
      </main>

      {/* Global site footer */}
      <Footer />
    </>
  )
}
