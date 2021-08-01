import React from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderComponent() {

  const [enabled, setEnabled] = useState((typeof window !== 'undefined')?(localStorage.theme==='dark'|| (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)):false);

  if(enabled){
    document.querySelector('html').classList.add('dark');
  }  
  return (
    <Disclosure as="nav" className="transition-colors duration-300 bg-light-secondary shadow dark:bg-dark-secondary">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary hover:bg-light-primary dark:hover:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                <a
                  href="/"
                  className="transition-colors duration-300  border-indigo-400 text-light-text-primary dark:text-dark-text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
                {/* <a
                  href="#"
                  className="transition-colors duration-300 border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-third hover:text-light-text-primary dark:hover:text-dark-text-primary dark:hover:border-dark-text-third  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-third hover:text-light-text-primary dark:hover:text-dark-text-primary dark:hover:border-dark-text-third inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300  border-transparent text-light-text-secondary text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-third hover:text-light-text-primary dark:hover:text-dark-text-primary dark:hover:border-dark-text-third inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Calendar
                </a> */}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Switch.Group as="div" className="flex items-center space-x-3">
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-gray-900 invisible sm:visible dark:text-gray-300">
            Dark Mode
          </span>
        </Switch.Label>
      
      <Switch
        checked={enabled}
        onChange={(enabled)=>{
          setEnabled(enabled);
          if(typeof localStorage === 'undefined')return;
          let htmlClasses = document.querySelector('html').classList;
          if(localStorage.theme === 'dark') {
            htmlClasses.remove('dark');
            localStorage.removeItem('theme')
          } else {
              htmlClasses.add('dark');
              localStorage.theme = 'dark';
          }
        }}
        className={classNames(
          enabled ? 'bg-indigo-400' : 'bg-dark-indigo-trans',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        >
         <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg className="bg-white h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
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
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true">
          <svg className="bg-white h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span> 
        </span>
      </Switch>
      
    </Switch.Group>

            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="pt-2 pb-4 space-y-1">
            {/* Current: "bg-indigo-50 border-indigo-400 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            <a
              href="/"
              className="bg-light-indigo-trans dark:bg-dark-indigo-trans border-indigo-400 text-indigo-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </a>
            {/* <a
              href="#"
              className="border-transparent text-light-text-secondary text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-third hover:text-light-text-primary dark:hover:text-dark-text-primary dark:hover:border-dark-text-third hover:bg-light-primary dark:hover:bg-dark-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="border-transparent text-light-text-secondary text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-third hover:text-light-text-primary dark:hover:text-dark-text-primary dark:hover:border-dark-text-third hover:bg-light-primary dark:hover:bg-dark-primary  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="border-transparent text-light-text-secondary text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-third hover:text-light-text-primary dark:hover:text-dark-text-primary dark:hover:border-dark-text-third hover:bg-light-primary dark:hover:bg-dark-primary  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Calendar
            </a> */}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}
