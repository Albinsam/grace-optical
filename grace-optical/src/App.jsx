import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Clinical from "./pages/Clinical"
import About from "./pages/About"
import Contact from "./pages/Contact"
import LensGuide from "./pages/LensGuide"

import FullLensGuidePage from "./pages/FullLensGuidePage"
import FullClinicalPage from "./pages/FullClinicalPage"
import FullAboutPage from "./pages/FullAboutPage"
import FullContactPage from "./pages/FullContactPage"

import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import PageTransition from "./components/PageTransition"
import ScrollProgress from "./components/ScrollProgress";
import WhatsappButton from "./components/WhatsappButton";
import PremiumFooter from "./components/PremiumFooter";

export default function App() {

  const location = useLocation();

  return (
    <>
    <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/collection" element={<PageTransition><Collection /></PageTransition>} />
          <Route path="/clinical" element={<PageTransition><Clinical /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/lens-guide" element={<PageTransition><LensGuide /></PageTransition>} />

          <Route path="/full-lens-guide" element={<PageTransition><FullLensGuidePage /></PageTransition>} />
          <Route path="/full-clinical" element={<PageTransition><FullClinicalPage /></PageTransition>} />
          <Route path="/full-about" element={<PageTransition><FullAboutPage /></PageTransition>} />
          <Route path="/full-contact" element={<PageTransition><FullContactPage /></PageTransition>} />

        </Routes>
      </AnimatePresence>

      <PremiumFooter />
      <WhatsappButton />
    </>
  )
}