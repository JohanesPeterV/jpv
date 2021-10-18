import React from "react";
import LayoutComponent from "../components/layout";
import SkillsPageContent from "../components/skills";
// markup
const SkillsPage = () => {
  return (
    <div>
      <LayoutComponent link="skills">
        <SkillsPageContent />
      </LayoutComponent>
    </div>
  );
};

export default SkillsPage;
