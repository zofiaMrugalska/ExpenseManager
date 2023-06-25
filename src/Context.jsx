import { createContext, useState } from "react";

const Context = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return <Context.Provider value={{ mode, toggleMode }}>{children}</Context.Provider>;
}

export default Context;
