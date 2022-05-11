import React, { useContext } from 'react';
import { ThemeContext } from '../context/context';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div type="checkbox" role="switch" className=" ease-in-out duration-500 ">
      {theme === 'dark' ? (
        <BsToggleOn
          onClick={handleClick}
          className="cursor-pointer text-2xl "
          title="light theme"
        />
      ) : (
        <BsToggleOff
          onClick={handleClick}
          className="cursor-pointer text-2xl "
          title="dark theme"
        />
      )}
    </div>
  );
}
