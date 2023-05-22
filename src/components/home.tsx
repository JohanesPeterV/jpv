import React from "react"
import Intro from "./intro"
import WorkExperience from "./work-experience"
import Projects from "./projects"


const HomePageContent = () => {
  return (
    <main className="transition-colors duration-300 ">
      <Intro/>
      <WorkExperience/>
      <Projects size={6} title='Github Projects' />

      
    </main>
  )
}

export default HomePageContent
