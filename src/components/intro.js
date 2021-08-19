import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ReferenceComponent from "./reference"
export default function IntroComponent() {
    return (
      <div className="transition-position duration-300 flex justify-center flex-col transition-colors duration-300 bg-white dark:bg-dark-primary">
        <div className="transition-position duration-300 max-w-7xl flex flex-col sm:flex-row sm:space-x-10 md:space-x-12 lg:space-x-16 items-center justify-center mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <StaticImage className="rounded-full w-20 h-20 sm:w-44 sm:h-44" src="../assets/images/jp.png" placeholder="dominantColor" alt="jp"/>
          <div className="transition-position duration-300 text-center max-w-sm md:max-w-m lg:max-w-lg sm:text-left leading-6 space-y-3">            
            <div className="space-y-0">
              <p className="transition-all duration-300  mt-1 text-light-text-primary dark:text-dark-text-primary text-2xl font-bold sm:text-2xl sm:tracking-tight md:text-3xl lg:text-4xl ">
                Johanes Peter Vincentius
              </p>
              <p className="transition-colors duration-300 mt-5  text-light-text-primary dark:text-dark-text-primary mx-auto text-s sm:text-2xl">
                JP20-2
              </p>
            </div>
            <p className="transition-colors duration-300 mt-5  text-light-text-secondary dark:text-dark-text-secondary mx-auto text-xs sm:text-lg">
              Currently studying as a student at Bina Nusantara and working as a Teaching Assistant at Software Laboratory Center Bina Nusantara.
            </p>
            
          </div>
        </div>
        
        <ReferenceComponent large={true}/>
      </div>
    )
  }