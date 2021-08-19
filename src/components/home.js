import React from "react"
import IntroComponent from "../components/intro"
import CurrentOccupationComponent from "./currento"
import ProjectsComponent from "./projects"


const HomePage = () => {
  return (
    <main className="space-y-28 py-28 sm:space-y-52 sm:py-52 transition-colors duration-300 bg-white dark:bg-dark-primary">
      <IntroComponent/>
      <CurrentOccupationComponent/>
      <ProjectsComponent/>    

      </main>
  )
}

export default HomePage
