import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'
import { Helmet } from "react-helmet";
export default function LayoutComponent(props) {  
  return (
    <div>
      <Helmet>
        <html lang="en"/>
        <title>Johanes Peter Vincentius</title>
        <link rel="icon" href="/assets/image/darkjp.png" type="image/png"/>
      </Helmet>
        <HeaderComponent/>
          {props.children}
        <FooterComponent/>
    </div>
  )
}
