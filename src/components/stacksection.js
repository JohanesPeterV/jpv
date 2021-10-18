import React, { useState } from "react";
import "./transition.css";
export default function StackSection(props) {
  const [enabled, setEnabled] = useState(true);
  function toggleDropDown() {
    setEnabled(!enabled);
  }
  return (
    <div className="flex flex-col justify-center pb-6">
      <button
        onClick={toggleDropDown}
        className="pb-4 transition-all transition-color duration-300 text-light-text-primary dark:text-dark-text-primary hover:text-indigo-400 dark:hover:text-indigo-400 text-center duration-300 mt-1 text-xl font-bold sm:text-xl sm:tracking-tight md:text-2xl lg:text-3xl z-30"
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
                {/* <p className="text-sm font-medium text-gray-900">{content}</p> */}
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
