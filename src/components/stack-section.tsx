import React, { useState } from "react";
import "./transition.css";
export default function StackSection(props) {
  const [enabled, setEnabled] = useState(true);
  function toggleDropDown() {
    setEnabled(!enabled);
  }
  return (
    <div className="pb-6 md:w-1/3 w-full flex flex-col items-center">
      <button
        onClick={toggleDropDown}
        className="pb-2 transition-all transition-color text-light-text-primary dark:text-dark-text-primary  text-center duration-300 mt-1 text-2xl  sm:text-2xl sm:tracking-tight md:text-2xl lg:text-3xl z-30"
      >
        {props.title}
      </button>
      <ul>
        <div
          className={
            "z-10 overflow-hidden transition-height ease-in-out duration-300 " +
            (enabled ? "transition-out " : " transition-in")
          }
        >
          <div
            className={
              "transition-all duration-300 ease-in-out transform" +
              (enabled
                ? "translate-y-0 "
                : "-translate-y-96 ")
            }
          >
            {props.contents.map((content) => (
              <li className="py-2 w-42 transition-transform transform duration-300 hover:scale-150 z-0">
                <a href={content.link}>
                  <div className="text-lg text-light-text-primary dark:text-dark-text-primary w-100 text-center">
                    {content.name}
                  </div>
                </a>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
}
