'use client'
import Link from "next/link"
import About from "@components/about"
import Skills_mobile from "@components/skills_mobile"
import Skills from "@components/skills"
import ProjectsMobile from "@components/projects_mobile"
import Projects from "@components/projects"
import Experience_mobile from "@components/experience_mobile"
import Experience from "@components/experience"
import Education from "@components/education"
import { useEffect, useState } from "react";
import {MdKeyboardDoubleArrowUp} from "react-icons/md"

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  
  return (
    <section>
        <a href={scrollY > 1500 ? "#about" : "javascript:;"} className={`${scrollY > 1500 ? "bg-black/40" : "bg-black/0"} ${scrollY > 1500 ? "cursor-pointer" : "cursor-default"} flex items-center justify-center transition-all ease-in-out duration-150 fixed w-14 h-14 lg:w-20 lg:h-20 z-50 right-0 bottom-36`}>
          <MdKeyboardDoubleArrowUp className={`text-8xl ${scrollY > 1500 ? "text-black" : "text-black/0"} transition-all ease-in-out duration-150`}/>
        </a>
        <About/>
        <Skills_mobile/>
        <Skills/>
        <ProjectsMobile/>
        <Projects/>
        <Experience_mobile/>
        <Experience/>
        <Education/>
        
    </section>
  )
}

export default Home