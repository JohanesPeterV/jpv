import React from "react"
import HomePage from "../components/home";
import LayoutComponent from "../components/layout";
// markup
const IndexPage = () => {
  return (
    <div>
      <LayoutComponent>
        <HomePage/>
      </LayoutComponent>
    </div>
  )
}

export default IndexPage
