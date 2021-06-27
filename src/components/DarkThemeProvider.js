import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const DarkThemeProvider = ({ children }) => {
  const isDarkThemeOn = useSelector((state) => state.preference.isDarkThemeOn);
  console.log(isDarkThemeOn);

  return (
    <ThemeProvider theme={{ theme: isDarkThemeOn ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
