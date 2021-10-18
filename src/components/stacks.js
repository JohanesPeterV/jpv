import React from "react";
import StackSection from "./stacksection";

const stacks = [
  {
    category: "Programming",
    contents: [
      {
        name: "C",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      { name: "C++", link: "https://en.wikipedia.org/wiki/C%2B%2B" },
      {
        name: "C#",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
      },
      { name: "R", link: "https://www.r-project.org/" },
      { name: "Java", link: "https://docs.oracle.com/en/java/" },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Dart", link: "https://dart.dev/guides" },
      {
        name: "Kotlin",
        link: "https://developer.android.com/kotlin?gclid=Cj0KCQjwtrSLBhCLARIsACh6RmhUfKr2tiXSAp33Ka688qBDNF1CIEs53jGAXBkiMzvxFOsQg8of-FQaAv8eEALw_wcB&gclsrc=aw.ds",
      },
      { name: "Python", link: "https://docs.python.org/3/" },
      { name: "PHP", link: "https://www.php.net/docs.php" },
      { name: "Go", link: "https://golang.org/doc/" },
    ],
  },
  {
    category: "Database",
    contents: [
      {
        name: "SQL Server",
        link: "https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15",
      },
      { name: "MongoDB", link: "https://docs.mongodb.com/" },
      {
        name: "Cloud Firestore",
        link: "https://firebase.google.com/docs/firestore",
      },
      { name: "MySQL", link: "https://dev.mysql.com/doc/" },
      { name: "SQLite", link: "https://www.sqlite.org/index.html" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
    ],
  },
  // asp.net
  {
    category: "Web",
    contents: [
      { name: "HTML, CSS, JS", link: "" },
      { name: "Angular", link: "https://angular.io/docs" },
      { name: "React", link: "https://reactjs.org/docs/getting-started.html" },
      {
        name: "Laravel",
        link: "https://laravel.com/docs/8.x/installation#meet-laravel",
      },
      { name: "Semantic UI React", link: "https://react.semantic-ui.com/" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "Gatsby", link: "https://www.gatsbyjs.com/" },
    ],
  },
  {
    category: "Others",
    contents: [
      { name: "Unity", link: "https://unity.com/" },
      {
        name: "Cisco Packet Tracer",
        link: "https://www.netacad.com/courses/packet-tracer",
      },
      { name: "Ubuntu Server", link: "https://ubuntu.com/server/docs" },
      { name: "Node.js", link: "https://nodejs.org/en/" },
      { name: "Xampp", link: "https://www.apachefriends.org/index.html" },
      {
        name: "Android",
        link: "https://developer.android.com/",
      },
      {
        name: "Flutter",
        link: "https://flutter.dev/?gclid=Cj0KCQjwtrSLBhCLARIsACh6RmjtHujNS1AIhGk-GQXSfuf8gq-KUuiP0CIjFJEBhg0Q5ZjyIybAew8aAmXMEALw_wcB&gclsrc=aw.ds",
      },
      {
        name: "Three JS",
        link: "https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene",
      },
      {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/sea/products/photoshop.html?sdid=12B9DXDJ&mv=search&ef_id=Cj0KCQjwtrSLBhCLARIsACh6RmjJ6Virn_0JHpLxMbT7u7jNRR_Ib-u4bCDOq_iaH7LL7ymElzdYFLUaAgg9EALw_wcB:G:s&s_kwcid=AL!3085!3!472466937532!e!!g!!photosho!11350284435!111298133196&gclid=Cj0KCQjwtrSLBhCLARIsACh6RmjJ6Virn_0JHpLxMbT7u7jNRR_Ib-u4bCDOq_iaH7LL7ymElzdYFLUaAgg9EALw_wcB",
      },
      {
        name: "Adobe Premier Pro",
        link: "https://www.adobe.com/sea/products/premiere.html?sdid=19SCDNXG&mv=search&ef_id=Cj0KCQjwtrSLBhCLARIsACh6RmjRstt3KcY5vpIT96TyizFoqn7aRc3mxi1exQ822Sdqqi_D-6OtjM4aAuryEALw_wcB:G:s&s_kwcid=AL!3085!3!424783761062!e!!g!!premiere%20pro!703952808!38400810458&gclid=Cj0KCQjwtrSLBhCLARIsACh6RmjRstt3KcY5vpIT96TyizFoqn7aRc3mxi1exQ822Sdqqi_D-6OtjM4aAuryEALw_wcB",
      },
    ],
  },
];

export default function StackComponent() {
  return (
    <div
      id="container"
      className="transition-colors duration-300 bg-light-secondary dark:bg-dark-secondary py-72 lg:py-8 md:py-16"
    >
      <div className="flex mb-4 flex-col items-center max-w-7xl mx-auto pt-16 px-4 text-center sm:pt-24 sm:px-6 lg:px-8">
        <p className="transition-all duration-300 mt-1 text-light-text-primary dark:text-dark-text-primary text-2xl font-bold sm:text-2xl sm:tracking-tight md:text-3xl lg:text-4xl ">
          Skill Stacks
        </p>
        {/* <p className="max-w-xl mt-2 mx-auto text-xs sm:text-lg text-light-text-secondary dark:text-dark-text-secondary">
          Technology Stacks I've learned
        </p> */}
      </div>
      {stacks.map((stack) => (
        <StackSection contents={stack.contents} title={stack.category} />
      ))}
    </div>
  );
}
