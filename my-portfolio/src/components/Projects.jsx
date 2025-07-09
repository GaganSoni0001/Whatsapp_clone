// Projects.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import gsap from 'gsap';
import { useRef } from 'react';

const data = [ /* your projects array */ ];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Swiper spaceBetween={30} slidesPerView={1.2}>
        {data.map(p => (
          <SwiperSlide key={p.id}>
            <ProjectCard project={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

// ProjectCard.jsx: animate on hover using GSAP
