'use client'
import { ThemeProvider } from 'next-themes';

const NextTheme = ({ children }) => {
  return (
   <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default NextTheme;