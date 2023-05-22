import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'
import { Helmet } from "react-helmet";
import SimpleParticle from './simple-particle';
export default function LayoutComponent(props) {  
  return (
    <div>         
      <Helmet>
        <html lang="en"/>
        <title>Johanes Peter Vincentius</title>
        <link rel="icon" href="/assets/darkjp.png" type="image/png"/>
      </Helmet>
        
      <SimpleParticle />     
          <div className='bg-light-secondary dark:bg-dark-secondary'>   

          <HeaderComponent link={props.link} />

            {props.children}
            <FooterComponent/>

          </div>
          
    </div>
  )
}
