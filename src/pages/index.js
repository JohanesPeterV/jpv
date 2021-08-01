import React from "react"
import HomePage from "../components/home";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import LayoutComponent from "../components/layout";
import { Helmet } from "react-helmet";
// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <html lang="en"/>
        <title>Johanes Peter Vincentius</title>
      </Helmet>
      <LayoutComponent>
        <HomePage/>
      </LayoutComponent>
    </div>
  )
}

export default IndexPage
