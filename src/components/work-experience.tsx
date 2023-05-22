import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function WorkExperience() {
  return (
    <div
      onMouseMove={parallax}
      id="container"
      className="transition-colors duration-300 bg-light-secondary dark:bg-dark-secondary py-72 lg:py-8 md:py-16"
    >
      <div className="flex flex-col items-center max-w-7xl mx-auto py-16 px-4 text-center sm:py-24 sm:px-6 lg:px-8">
        <p className="transition-all duration-300 mt-1 text-light-text-primary dark:text-dark-text-primary text-2xl font-bold sm:text-2xl sm:tracking-tight md:text-3xl lg:text-5xl ">
          Current Occupation
        </p>

        <p className="max-w-xl mt-2 mb-10 mx-auto text-xs sm:text-lg text-light-text-primary dark:text-dark-text-primary">
          Database Administrator at Software Laboratory Center
        </p>

        <a
          href="https://www.instagram.com/slcbinusuniv/"
          className="group rounded-2xl overflow-hidden relative w-2/3 border-4 border-light-text-primary dark:border-dark-text-primary"
        >
          <div className="px-2 flex justify-center items-center text-xs sm:text-l md:text-2xl color-transition duration-300 absolute z-50 w-full h-full opacity-0 group-hover:opacity-80  bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary">
            In Honesty and Hardwork, We Strive for Excellence
          </div>

          <StaticImage
            style={{ position: "absolute" }}
            className="layer z-30 filter blur-none group-hover:blur-md"
            src="../assets/images/202.png"
            placeholder="dominantColor"
            alt="jp"
          />
          <StaticImage
            className="opacity-60 z-10 filter blur-none group-hover:blur-md"
            src="../assets/images/shadow202.png"
            placeholder="blurred"
            alt="jp"
          />
        </a>
      </div>

      {/* {document.addEventListener("mousemove", parallax)} */}
      <script src="./parallax.js"></script>
    </div>
  );
}
function parallax(e): void {
  var container = document.getElementById("container");
  var docs = document.querySelectorAll<HTMLElement>('.layer');
  let len = docs.length;
  if (container === null) return;
  const w = container.offsetWidth / 1903;
  const h = container.offsetHeight / 986;
  for (let i = 0; i < len; i++) {
    const x = (e.clientX * 0.006 * (i + 1) - 3.2 * (i + 1)) * w;
    const y = e.clientY * 0.006 * (i + 1) * h;
    docs[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
  }
}
