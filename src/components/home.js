import React from "react"
import IntroComponent from "../components/intro"
import CurrentOccupationComponent from "./curr-occupation"
import ProjectsComponent from "./projects"


const HomePageContent = () => {
  return (
    <main className="space-y-52 py-28 sm:space-y-52 sm:py-52 transition-colors duration-300 bg-white dark:bg-dark-primary">
      <IntroComponent/>
      <CurrentOccupationComponent/>
      <ProjectsComponent size={4} title='Recent Projects' desc="Recent Projects I've been working on."/>    
    </main>
  )
}

export default HomePageContent
