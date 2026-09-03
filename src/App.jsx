import { HashRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import SmartDairy from './pages/SmartDairy'
import Technology from './pages/Technology'
import DairyFoods from './pages/DairyFoods'
import Nutrition from './pages/Nutrition'
import Genetics from './pages/Genetics'
import Agriculture from './pages/Agriculture'
import Sustainability from './pages/Sustainability'
import Innovation from './pages/Innovation'
import Business from './pages/Business'
import Campus from './pages/Campus'
import Contact from './pages/Contact'
import { useTheme } from './hooks/useTheme'

function AppShell() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 20,
      easing: 'ease-out-cubic',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-[#0b1210] transition-colors duration-300 dark:bg-[#0b1210] dark:text-white">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/smart-dairy" element={<SmartDairy />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/dairy-foods" element={<DairyFoods />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/genetics" element={<Genetics />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/business" element={<Business />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer theme={theme} />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
