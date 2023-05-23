import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ReferenceComponent from "./reference"


export default function FooterComponent(){
    return (
        <footer className="transition-colors duration-300 ">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:flex md:items-center md:justify-between lg:px-8">
            <ReferenceComponent large={false} className='justify'/>
            <div className="mt-2 md:mt-0 flex items-center justify-center">          
              <StaticImage className="" width={32}  src="../assets/images/lightjp.png" placeholder="blurred" alt="jp"/>
              <StaticImage className="" width={32}  src="../assets/images/darkjp.png" placeholder="blurred" alt="jp"/>
            </div>
            <div className="mt-2 md:mt-0 md:order-1">
              <p className="transition-colors duration-300 text-center text-base text-light-text-primary dark:text-dark-text-primary">Copyright &copy; 2021</p>
            </div>
          </div>
      </footer>
    )
}