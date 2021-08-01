import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LayoutComponent(props) {  
  return (
    <div>
        <HeaderComponent/>
        {props.children}
        <FooterComponent/>
    </div>
  )
}
