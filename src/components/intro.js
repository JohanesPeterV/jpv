import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import ReferenceComponent from './reference'
export default function IntroComponent() {
  return (
    <div className="py-32 transition-position duration-300 flex justify-center flex-col transition-colors duration-300 bg-white dark:bg-dark-primary">
      <div className="transition-position duration-300 max-w-8xl flex flex-col sm:flex-row sm:space-x-6 md:space-x-12 lg:space-x-12 items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <StaticImage
          className="rounded-full w-24 h-24 sm:w-44 sm:h-44"
          src="../assets/images/jp.png"
          placeholder="dominantColor"
          alt="jp"
        />
        <div className="transition-position duration-300 text-center max-w-sm md:max-w-m lg:max-w-lg sm:text-left leading-6 space-y-3">
          <div className="space-y-0">
            <p className="transition-all duration-300 mt-1 text-light-text-primary dark:text-dark-text-primary text-3xl font-bold pt-2 sm:pt-0 sm:tracking-tight md:text-3xl lg:text-3xl ">
              Johanes Peter Vincentius
            </p>
            <p className="transition-colors duration-300 mt-5 text-light-text-primary dark:text-dark-text-primary mx-auto text-2xl sm:text-2xl">
              JP20-2
            </p>
          </div>
          
          <hr className="border-light-text-secondary dark:border-dark-text-secondary border-t-2"/>
          <p className="transition-colors duration-300 mt-5 max-w-xs sm:max-w-full text-light-text-secondary dark:text-dark-text-secondary mx-auto text-md sm:text-lg">
            Currently working as a Database Administrator at Software Laboratory
            Center Bina Nusantara.
          </p>
        </div>
      </div>

      <ReferenceComponent className=" pt-4 sm:pt-12" large={true} />
    </div>
  )
}
