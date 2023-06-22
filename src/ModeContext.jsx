import { createContext, useState } from "react";

const ModeContext = createContext();
const defaultMode = "light";

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(defaultMode);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return <ModeContext.Provider value={{ mode, toggleMode }}>{children}</ModeContext.Provider>;
}

export default ModeContext;
