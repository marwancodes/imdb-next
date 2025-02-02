"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

type ProvidersProps = {
    children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
      <ThemeProvider defaultTheme='system' attribute='class' >
        <div className='text-gray-800 dark:text-gray-200 dark:bg-gray-800 min-h-screen select-none transition-colors duration-300'>
          {children}
        </div>
      </ThemeProvider>
    );
  }

  export default Providers;
