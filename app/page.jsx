import Link from "next/link"
import About from "@components/about"
import Skills_mobile from "@components/skills_mobile"
import Skills from "@components/skills"
import ProjectsMobile from "@components/projects_mobile"
import Projects from "@components/projects"
import Experience_mobile from "@components/experience_mobile"
import Experience from "@components/experience"
import Education from "@components/education"
const Home = () => {


  
  return (
    <section>
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