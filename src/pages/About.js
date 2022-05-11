import React from 'react';
import logo from '../assets/MandatoryWeather-logos_transparent.png';

const About = () => {
  return (
    <>
      <section className="bg-primary p-5 w-5/6 mx-auto h-auto max-w-3xl rounded-lg drop-shadow-2xl">
        <div className="p-4 text-primary">
          <h3 className="font-sans text-xl font-medium text-secondary">
            About Mandatory Weather
          </h3>
          <img src={logo} alt="logo" className=" max-h-12 p-1 float-left " />
          <p className="pt-4 ">
            is a weather app built on top of the{' '}
            <a
              className="text-accent underline hover:text-accent/30 "
              href="https://openweathermap.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
            .
          </p>

          <p className="pt-4">
            It runs on{' '}
            <a
              className="text-accent underline "
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            with{' '}
            <a
              className="text-accent underline "
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
            . It uses a few npm packages like{' '}
            <a
              className="text-accent underline "
              href="https://react-icons.github.io/react-icons/icons?name=wi"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Icons
            </a>
            {', '}
            <a
              className="text-accent underline "
              href="https://axios-http.com/docs/intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Axios
            </a>
            {', '}
            <a
              className="text-accent underline "
              href="https://momentjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moment.js
            </a>
            {''} and{' '}
            <a
              className="text-accent underline "
              href="https://recharts.org/en-US/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReCharts
            </a>
            .
          </p>
          <p className="pt-4">
            Feel free to take a look at the source code on{' '}
            <a
              className="text-accent underline "
              href="https://github.com/stanAlexandru26/Mandatory-Weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {','} maybe you get inspired from it or even want fork it.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
