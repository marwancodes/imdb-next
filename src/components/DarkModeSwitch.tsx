"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {

  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(
    () => setMounted(true)
  , []);
  return (
    <div>
      {mounted && (currentTheme === 'dark' ?
        <MdDarkMode onClick={() => setTheme('light')} className='text-2xl cursor-pointer hover:text-amber-500' />
        :
        <MdLightMode onClick={() => setTheme('dark')} className='text-2xl cursor-pointer hover:text-amber-500' />
      )}
    </div>
  )
}

export default DarkModeSwitch