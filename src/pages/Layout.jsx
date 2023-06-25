import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Expenses from "./expenses/Expenses";
import Navbar from "./Navbar";
import Context from "../Context";
import { useContext } from "react";

const Layout = () => {
  const { mode } = useContext(Context);
  return (
    <div
      className={`min-h-[1024px] p-4 sm:py-6 sm:px-14 md:p-10 md:px-20 lg:px-40 xl:py-10 xl:px-52 ${
        mode === "light" ? "bg-white text-gray-950" : " bg-[#1A1A1A] text-white"
      }`}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Layout;
