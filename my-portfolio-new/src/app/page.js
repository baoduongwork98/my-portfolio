"use client"
import NavbarCustom from '../sections/NavbarCustom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        {/* <div className="w-full text-gray-900 dark:text-white"> */}
        <NavbarCustom>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </NavbarCustom>
        {/* </div> */}
      </motion.h1>
    </HeroHighlight>
  )
}
