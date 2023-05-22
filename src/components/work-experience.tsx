import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Disclosure } from "@headlessui/react";

const workExperienceList = [
  {
    place: "Software Lab Center",
    time: {
      start: "2020",
      end: "present",
    },
    roles: [
      {
        title: "Database Administrator at Software Laboratory Center",
        description: `While being a Database Administrator, 
        I am tasked to maintain the database that supports 
        operations around Software Laboratory Center and carry 
        out Lab prochedures like transfer score. 
        As a database administrator in Software Laboratory Center,
        I am also tasked to maintain the database administrator's web application 
        and remake the database administrator's web application.
        `,
        time: {
          start: "2021",
          end: "present",
        },
      },
      {
        title: "Teaching Assistant at Software Laboratory Center",
        description: `While being a Teaching Assistant, 
        I am tasked to teach students in
        programming-based practicum subjects,
        participate in teaching qualification and trainings, 
        grading student answers and make exam cases.`,
        time: {
          start: "2020",
          end: "2021",
        },
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <div
      onMouseMove={parallax}
      id="container"
      className="min-h-screen py-72 lg:py-8 md:py-16 z-50"
    >
      <div className="space-y-4 flex flex-col items-center max-w-7xl mx-auto py-16 px-4 text-center sm:py-24 sm:px-6 lg:px-8">
        <p className="transition-all duration-300 mt-1 text-light-text-primary dark:text-dark-text-primary text-2xl font-bold sm:text-2xl sm:tracking-tight md:text-3xl lg:text-5xl  pb-2">
          Work Experience
        </p>
        {workExperienceList.map((workExperience) => (
          <div className="space-y-4 flex flex-col items-center ">
            <div className="flex flex-col justify-between mb-1 space-y-3">
              <h1 className="transition-all duration-300 text-light-text-primary dark:text-dark-text-primary text-3xl font-semibold">
                {workExperience.place}
              </h1>

              <h1 className="transition-all duration-300 text-light-text-primary dark:text-dark-text-primary text-lg">
                {workExperience.time.start}-{workExperience.time.end}
              </h1>
            </div>

            {workExperience.roles.map((role) => (
              <div className="w-2/3 pb-6 pt-4 px-8 transition-color shadow-md duration-300 transform hover:shadow-xl dark:bg-opacity-80 bg-light-primary dark:bg-dark-primary dark:shadow-dark-primary  bg-opacity-80 rounded-xl">
                <div className="flex flex-row justify-between text-xl mb-1 font-semibold">
                  <h1 className="transition-all duration-300 text-light-text-primary dark:text-dark-text-primary">
                    {role.title}
                  </h1>

                  <h1 className="transition-all duration-300 text-light-text-primary dark:text-dark-text-primary">
                    {role.time.start}-{role.time.end}
                  </h1>
                </div>
                <div className="flex items-stretch justify-between space-x-3"></div>
                <p className="transition-all duration-300 text-light-text-secondary dark:text-dark-text-secondary text-md text-left">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        ))}

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
  var docs = document.querySelectorAll<HTMLElement>(".layer");
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
