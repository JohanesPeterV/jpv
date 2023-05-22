import React from "react";
import ProjectsComponent from "./projects";
import SkillSumComponent from "./skill-sum";
import StackComponent from "./stacks";

const SkillsPageContent = () => {
  return (
    <main className="space-y-52 py-28 sm:space-y-52 sm:py-52 transition-colors duration-300 bg-white dark:bg-dark-primary">
          <SkillSumComponent/>
          <StackComponent/>
          <ProjectsComponent title='Projects' desc="Some publishable projects I made."/>    

    </main>
  );
};

export default SkillsPageContent;
