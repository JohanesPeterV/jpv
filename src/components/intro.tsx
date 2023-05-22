import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ReferenceComponent from "./reference";
import TextTransition, { presets } from "react-text-transition";
const TYPES = [
  "Vue.js",
  "Vue.js",
  "Next.js",
  "Flutter",
  "Apollo Server",
  "Android",
  "Laravel",
  "Asp.net",
  "Node.js",
];

export default function Intro() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % TYPES.length),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id="intro" className="snap-y min-h-screen transition-position flex flex-col justify-center transition-colors duration-300 ">
      <div className="transition-position duration-300 max-w-8xl flex flex-col sm:flex-row sm:space-x-6 md:space-x-8 lg:space-x-8 items-center sm:items-start justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <StaticImage
          className="rounded-full w-24 h-24 sm:w-44 sm:h-44 "
          src="../assets/images/jp.png"
          placeholder="dominantColor"
          alt="jp"
        />
        <div className="transition-position duration-300 flex flex-col max-w-sm md:max-w-m lg:max-w-lg text-center sm:text-left leading-6 space-y-2">
          <div className="space-y-0">
            <h1 className="transition-all duration-300 mt-1 text-light-text-primary dark:text-dark-text-primary text-3xl font-semibold pt-2 sm:pt-0 sm:tracking-tight md:text-3xl lg:text-4xl">
              Johanes Peter Vincentius
            </h1>
            <p className="transition-colors duration-300 mt-5 text-light-text-primary dark:text-dark-text-primary mx-auto text-2xl sm:text-xl">
              Web/Mobile Developer
            </p>
          </div>
          <hr className="border-light-text-primary dark:border-dark-text-primary border-t-2" />
          <p className="transition-colors duration-300 mt-5 max-w-xs sm:max-w-full sm:w-full flex text-light-text-primary dark:text-dark-text-primary mx-auto text-md sm:text-xl">
            Proficient in&nbsp;
            <TextTransition springConfig={presets.default}>
              {TYPES[index]}
            </TextTransition>
          </p>

          <ReferenceComponent className="justify-start" large={true} />
        </div>
      </div>
    </div>
  );
}
