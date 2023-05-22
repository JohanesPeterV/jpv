import React from "react";

const projects = [
  {
    name: "Simple Helpdesk",
    desc: "Helpdesk App, which features ticketing system with email.",
    stacks: ["Next.js", "Tailwind", "Prisma", "Postgresql"],
    gitLink: "https://github.com/JohanesPeterV/MyUtangBackend",
  },
  {
    name: "MyUtang Backend",
    desc: "MyUtang Backend App, feature: login and manage debts between user.",
    stacks: ["Apollo Server", "Graphql"],
    gitLink: "https://github.com/JohanesPeterV/MyUtangBackend",
  },
  {
    name: "JPV",
    desc: "My Porto Website.",
    stacks: ["React", "Gatsby", "Tailwind"],
    liveLink: "https://jpv.my.id",
    gitLink: "https://github.com/JopHme/jpv",
  },
  {
    name: "SpaceShooter 202",
    desc: "A Brick shooting game made using html5 canvas and javascript",
    stacks: ["HTML", "Canvas", "CSS", "JavaScript"],
    liveLink: "https://jophme.github.io/SpaceDefender202/",
    gitLink: "https://github.com/JopHme/SpaceDefender202",
  },


  {
    name: "Chantuy",
    desc: "An android forum based application for people to share their thoughts.",
    stacks: ["Android", "Kotlin", "Firebase"],
    gitLink: "https://github.com/JopHme/chantuy-app",
  },
  {
    name: "JP Automata",
    desc: "Inspired from nier automata, implemented AStar Algorithm.",
    stacks: ["C++"],
    gitLink: "https://github.com/JopHme/JP-Automata",
  },
  {
    name: "JPToDoList",
    desc: "A todolist app implemented using java Swing.",
    stacks: ["Java", "Java Swing"],
    gitLink: "https://github.com/JopHme/chantuy-app",
  },
  {
    name: "SumSang",
    desc: "A simple website implemented for multimedia project.",
    stacks: ["Angular"],
    liveLink: "https://sumsangsumsang.netlify.app/",
    gitLink: "https://github.com/JopHme/chantuy-app",
  },
  {
    name: "Staem",
    desc: "Steam clone.",
    stacks: ["Angular"],
    gitLink: "https://github.com/JopHme/StaemFrontEnd",
  },
  {
    name: "Staem Backend",
    desc: "Back end steam clone.",
    stacks: ["Golang", "PosGresql", "Redist"],
    gitLink: "https://github.com/JopHme/StaemBackEnd",
  },
];

export default function Projects(props) {
  return (
    <div
      className={
        "h-screen min-h-screen flex justify-center transition-colors duration-300 " +
        (props.size < 5 ? "py-24" : "")
      }
    >
      <div className="mx-auto flex justify-center items-center px-4 max-w-7xl sm:px-6 lg:px-8 ">
        <div className="space-y-12">
          <div className="space-y-2 sm:space-y-1 xl:max-w-none">
            <p className="transition-all duration-300 mt-1 text-light-text-primary dark:text-dark-text-primary text-3xl font-bold pt-2 sm:pt-0 sm:tracking-tight md:text-3xl lg:text-4xl text-center">
              {props.title}
            </p>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {projects.slice(0, props.size).map((project) => (
              <li key={project.name} >
                <div className="space-y-4 p-4 transition-color shadow-md duration-300 transform hover:shadow-xl dark:bg-opacity-80 bg-light-primary dark:bg-dark-primary dark:shadow-dark-primary  bg-opacity-80 rounded-xl">
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h2 className="text-lg transition-all duration-300 text-light-text-primary dark:text-dark-text-primary">
                        {project.name}
                      </h2>
                      <div className="flex items-stretch justify-between space-x-3"></div>
                      <p className="h-10 transition-all duration-300 text-light-text-secondary dark:text-dark-text-secondary text-sm">
                        {project.desc}
                      </p>
                    </div>
                    <ul className="flex flex-wrap">
                      {project.stacks.slice(0, project.stacks.length).map((stack) => (
                        <li className="bg-light-secondary dark:bg-dark-secondary dark:text-dark-text-primary text-light-text-primary h-min rounded-xl px-2 py-0.5 mr-1 mb-2">
                          {stack}
                        </li>
                      ))}
                    </ul>
                    <ul className="h-12  flex space-x-5">
                      <li>
                        <a
                          href={project.gitLink}
                          className="text-light-text-secondary dark:text-dark-text-secondary flex space-x-1 hover:text-light-text-primary dark:hover:text-dark-text-primary"
                        >
                          <svg
                            fill="currentColor"
                            className="w-7 "
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                          <p>view on github</p>
                        </a>
                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            className="text-light-text-secondary dark:text-dark-text-secondary flex space-x-1 hover:text-light-text-primary dark:hover:text-dark-text-primary"
                          >
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="w-7"
                            >
                              <path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z" />
                            </svg>
                            <p>view live</p>
                          </a>
                        ) : (
                          <></>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
