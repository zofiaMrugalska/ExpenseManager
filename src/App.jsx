import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Expenses from "./pages/expenses/Expenses";
import Navbar from "./pages/Navbar";
import { ModeProvider } from "./ModeContext";

function App() {
  return (
    <div>
      <ModeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="*" element={<h1>ERROR 404</h1>} />
          </Routes>
        </BrowserRouter>
      </ModeProvider>
    </div>
  );
}

export default App;
