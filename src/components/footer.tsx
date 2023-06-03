import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReferenceComponent from "./reference";
import { useAtom } from "jotai";
import { darkThemeAtom } from "../constants/dark-theme-atom";

export default function FooterComponent() {
  const [enabled, setEnabled] = useAtom(darkThemeAtom);
  return (
    <footer className="transition-colors duration-300 text-center">
      <div className="mx-auto py-12 sm:px-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="md:w-1/3 lg:w-1/5">
          {enabled ? (
            <StaticImage
              className=""
              width={32}
              src="../assets/images/darkjp.png"
              placeholder="blurred"
              alt="jp"
            />
          ) : (
            <StaticImage
              className=""
              width={32}
              src="../assets/images/lightjp.png"
              placeholder="blurred"
              alt="jp"
            />
          )}
        </div>

        <p className="transition-colors duration-300 text-center text-base text-light-text-primary dark:text-dark-text-primary md:w-1/3 lg:w-1/5">
          Copyright &copy; 2021
        </p>
        <ReferenceComponent large={false} className=" justify-center md:w-1/3 lg:w-1/5" />

      </div>
    </footer>
  );
}
