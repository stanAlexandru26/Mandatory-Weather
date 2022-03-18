import React from 'react';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import logo from '../assets/MandatoryWeather-logos_transparent.png';

export default function Navbar() {
  return (
    <nav className="bg-primary text-primary drop-shadow-lg rounded-b-lg px-10  max-h-32 py-1 antialiased">
      <div className="flex items-center justify-between ">
        <div className=" ">
          <Link to="/">
            <img src={logo} alt="logo" className=" max-h-12  p-1 " />
          </Link>
        </div>
        <div className="flex justify-between gap-5 ">
          <Link to="/about">About</Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/stanAlexandru26"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
          >
            <span className="sr-only">Mandatory Weather on GitHub</span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
