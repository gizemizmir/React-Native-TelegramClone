import React, {useState} from 'react';
import darkTheme from '../constants/theme/dark';
import lightTheme from '../constants/theme/light';
import {ThemeContext} from '../context/theme';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  const handleToggleTheme = () => {
    if (theme.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme: handleToggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
