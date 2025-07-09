// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, gsap } from 'gsap';
import Hero from './components/Hero';
import About from './components/About';
// etc...

function AnimatedRoutes() {
  const loc = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={loc} key={loc.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        {/* ...other pages */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
