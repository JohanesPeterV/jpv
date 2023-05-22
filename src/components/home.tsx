import React from "react"
import Intro from "./intro"
import CurrentOccupation from "./curr-occupation"
import ProjectsComponent from "./projects"


const HomePageContent = () => {
  return (
    <main className="transition-colors duration-300 ">
      <Intro/>
      {/* <CurrentOccupation/> */}
      
      <ProjectsComponent size={4} title='Recent Projects' desc="Recent Projects I've been working on."/>   
      
    </main>
  )
}

export default HomePageContent
