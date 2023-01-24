import React, {useContext, createContext} from 'react'

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };


const ThemeContext = createContext(themes.light)

const useContext1 = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );

    function ThemedButton() {
        const theme = useContext(ThemeContext);
        return <button style={{background: theme.background, color: theme.foreground}}>Hover me!</button>;
    }
}


export default useContext1