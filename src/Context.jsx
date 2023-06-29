import { createContext, useState } from "react";

const Context = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [historyData, setHistoryData] = useState([]);

  const addHistoryData = (newObject) => {
    setHistoryData([...historyData, newObject]);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Context.Provider value={{ mode, toggleMode, historyData, addHistoryData, setHistoryData }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
