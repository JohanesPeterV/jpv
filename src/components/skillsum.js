import { StaticImage } from "gatsby-plugin-image";
import React from "react";
export default function SkillSumComponent() {
  return (
    <div className="relative py-16 transition-colors duration-300 bg-light-primary  dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold transition-colors duration-300 text-light-text-primary dark:text-dark-text-primary sm:text-5xl sm:tracking-tight lg:text-6xl">
            Stacks and Projects
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl transition-colors duration-300 text-light-text-secondary dark:text-dark-text-secondary">
            Stacks I've learned and Projects I've done as an undergraduate, learner and Teaching Assistant.
          </p>
        </div>
      </div>
    </div>
  );
}
