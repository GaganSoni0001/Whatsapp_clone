// Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Hero() {
  const ref = useRef();
  useEffect(() => {
    gsap.from(ref.current, { opacity: 0, y: 50, duration: 1 });
  }, []);
  return (
    <section ref={ref} className="hero">
      <h1>Hi, I'm Gagan</h1>
      <p>Full-Stack Developer</p>
    </section>
  );
}
