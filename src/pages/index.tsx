import React from "react"
import HomePageContent from "../components/home";
import LayoutComponent from "../components/layout";
// markup
const IndexPage = () => {
  return (
    <div>
      <LayoutComponent link='home'>
        <HomePageContent/>
      </LayoutComponent>
    </div>
  )
}

export default IndexPage
