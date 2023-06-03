import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "gatsby";
import { useAtom, atom } from "jotai";
import { darkThemeAtom } from "../constants/dark-theme-atom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderComponent(props) {
  const [enabled, setEnabled] = useAtom(darkThemeAtom);
  useEffect(() => {
    setEnabled(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);
  if (typeof document!=="undefined") {
    const htmlElement: HTMLHtmlElement | null = document.querySelector("html");
    if (enabled && htmlElement != null && htmlElement?.classList != null) {
      htmlElement.classList.add("dark");
    }
  }
  return (
    <Disclosure as="nav" className="transition-colors duration-300">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 xl:px-24 fixed z-30 right-0 pt-4">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Switch.Group as="div" className="flex items-center space-x-3">
                  <Switch.Label as="span" className="ml-3">
                  </Switch.Label>

                  <Switch
                    checked={enabled}
                    onChange={(enabled) => {
                      setEnabled(() => enabled);
                      let htmlElement: HTMLHtmlElement | null =
                        document.querySelector("html");
                      if (
                        htmlElement != null &&
                        htmlElement.classList != null
                      ) {
                        if (localStorage.theme === "dark") {
                          htmlElement.classList.remove("dark");
                          localStorage.removeItem("theme");
                        } else {
                          htmlElement.classList.add("dark");
                          localStorage.theme = "dark";
                        }
                      }
                    }}
                    className={classNames(
                      enabled ? "bg-light-primary" : "bg-dark-primary",
                      " relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabled ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-light-primary dark:bg-dark-primary shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    >
                      <span
                        className={classNames(
                          enabled
                            ? "opacity-0 ease-out duration-100"
                            : "opacity-100 ease-in duration-200",
                          "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                      >
                        <svg
                          className="bg-white h-3 w-3 text-light-text-primary"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className={classNames(
                          enabled
                            ? "opacity-100 ease-in duration-200"
                            : "opacity-0 ease-out duration-100",
                          "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                      >
                        <svg
                          className="bg-black h-3 w-3 text-dark-text-primary"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </Switch>
                </Switch.Group>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
